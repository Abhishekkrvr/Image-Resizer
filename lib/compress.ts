export type CompressResult = {
  blob: Blob;
  url: string;
  sizeBytes: number;
  width: number;
  height: number;
  quality: number;
};

async function normalizeImageFile(file: File): Promise<File> {
  const lower = file.name.toLowerCase();
  if (!lower.endsWith('.heic') && !lower.endsWith('.heif') && !file.type.includes('heic') && !file.type.includes('heif')) return file;
  const mod = await import('heic2any');
  const converted = await mod.default({ blob: file, toType: 'image/jpeg', quality: 0.95 });
  const blob = Array.isArray(converted) ? converted[0] : converted;
  return new File([blob], file.name.replace(/\.(heic|heif)$/i, '.jpg'), { type: 'image/jpeg' });
}

function loadImage(file: File): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => { URL.revokeObjectURL(url); resolve(img); };
    img.onerror = () => { URL.revokeObjectURL(url); reject(new Error('Could not read image')); };
    img.src = url;
  });
}

function canvasToBlob(canvas: HTMLCanvasElement, quality: number, mime: string): Promise<Blob | null> {
  return new Promise((resolve) => canvas.toBlob(resolve, mime, quality));
}

export async function compressToTargetSize(file: File, targetBytes: number, opts: {
  mime?: 'image/jpeg' | 'image/webp';
  minDimension?: number;
  exactWidth?: number;
  exactHeight?: number;
  onProgress?: (pass: number) => void;
} = {}): Promise<CompressResult> {
  const normalized = await normalizeImageFile(file);
  const img = await loadImage(normalized);
  const mime = opts.mime ?? 'image/jpeg';
  const targetW = opts.exactWidth;
  const targetH = opts.exactHeight;

  let baseW = targetW ?? img.naturalWidth;
  let baseH = targetH ?? img.naturalHeight;
  let scale = 1;
  let best: { blob: Blob; quality: number; w: number; h: number } | null = null;
  let pass = 0;

  for (let dimensionTry = 0; dimensionTry < 12; dimensionTry++) {
    const w = Math.max(1, Math.round(baseW * scale));
    const h = Math.max(1, Math.round(baseH * scale));
    const canvas = document.createElement('canvas');
    canvas.width = w; canvas.height = h;
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Canvas unavailable');
    ctx.imageSmoothingQuality = 'high';
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, w, h);

    // Center-crop to requested aspect ratio when exact dimensions are supplied.
    const srcRatio = img.naturalWidth / img.naturalHeight;
    const dstRatio = w / h;
    let sx = 0, sy = 0, sw = img.naturalWidth, sh = img.naturalHeight;
    if (targetW && targetH) {
      if (srcRatio > dstRatio) { sw = img.naturalHeight * dstRatio; sx = (img.naturalWidth - sw) / 2; }
      else { sh = img.naturalWidth / dstRatio; sy = (img.naturalHeight - sh) / 2; }
    }
    ctx.drawImage(img, sx, sy, sw, sh, 0, 0, w, h);

    let lo = 0.03, hi = 0.98;
    for (let i = 0; i < 9; i++) {
      const q = (lo + hi) / 2;
      pass++; opts.onProgress?.(pass);
      const blob = await canvasToBlob(canvas, q, mime);
      if (!blob) continue;
      if (blob.size <= targetBytes) { best = { blob, quality: q, w, h }; lo = q; }
      else hi = q;
    }
    if (best) break;
    if (targetW && targetH) break;
    const minDim = opts.minDimension ?? 200;
    if (Math.min(w, h) <= minDim) break;
    scale *= 0.82;
  }

  if (!best) {
    // Produce the smallest possible valid-dimension output and let the UI explain the miss.
    const w = targetW ?? Math.max(1, Math.round(baseW * scale));
    const h = targetH ?? Math.max(1, Math.round(baseH * scale));
    const canvas = document.createElement('canvas'); canvas.width = w; canvas.height = h;
    const ctx = canvas.getContext('2d'); if (!ctx) throw new Error('Canvas unavailable');
    ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, w, h); ctx.drawImage(img, 0, 0, w, h);
    const blob = await canvasToBlob(canvas, 0.03, mime);
    if (!blob) throw new Error('Compression failed');
    best = { blob, quality: 0.03, w, h };
  }

  return { blob: best.blob, url: URL.createObjectURL(best.blob), sizeBytes: best.blob.size, width: best.w, height: best.h, quality: best.quality };
}

export function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}
