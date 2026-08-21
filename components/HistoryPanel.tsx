"use client";
import { useEffect, useState } from 'react';
import { clearHistory, deleteHistory, getHistory, HistoryItem } from '@/lib/history';
import { formatBytes } from '@/lib/compress';

function formatDate(timestamp: number) {
  return new Intl.DateTimeFormat('en-IN', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }).format(timestamp);
}

export default function HistoryPanel() {
  const [items, setItems] = useState<HistoryItem[]>([]);
  const [urls, setUrls] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);

  const refresh = async () => {
    try {
      const next = await getHistory();
      setItems(next);
      setUrls(prev => {
        Object.values(prev).forEach(url => URL.revokeObjectURL(url));
        return Object.fromEntries(next.map(item => [item.id, URL.createObjectURL(item.blob)]));
      });
    } finally { setLoading(false); }
  };

  useEffect(() => {
    refresh();
    const onUpdated = () => refresh();
    window.addEventListener('realimageresizer:history-updated', onUpdated);
    return () => window.removeEventListener('realimageresizer:history-updated', onUpdated);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const remove = async (id: string) => { await deleteHistory(id); await refresh(); };
  const clear = async () => { if (confirm('Clear all Real Image Resizer history from this device?')) { await clearHistory(); await refresh(); } };

  return <section id="history" className="max-w-[1000px] mx-auto px-5 py-12">
    <div className="flex items-end justify-between gap-4 mb-5">
      <div><p className="text-accent font-bold text-sm">YOUR FILES</p><h2 className="font-display font-bold text-2xl mt-1">History</h2><p className="text-sm opacity-55 mt-1">Processed files saved on this device. No account required.</p></div>
      {items.length > 0 && <button onClick={clear} className="text-xs font-semibold opacity-55 hover:opacity-100">Clear history</button>}
    </div>
    {loading ? <div className="rounded-2xl border border-black/10 bg-white/70 p-8 text-center text-sm opacity-55">Loading your history…</div> : items.length === 0 ? <div className="rounded-2xl border border-dashed border-black/15 bg-white/60 p-10 text-center"><div className="text-3xl">🗂️</div><p className="font-semibold mt-3">No processed files yet</p><p className="text-sm opacity-50 mt-1">Every file you process will appear here for quick access later.</p></div> : <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {items.map(item => <article key={item.id} className="rounded-2xl border border-black/10 bg-white/75 p-4 overflow-hidden">
        <img src={urls[item.id]} alt={item.requirementTitle} className="w-full aspect-[4/3] object-contain rounded-xl bg-black/[.03]" />
        <p className="font-semibold text-sm mt-3 truncate">{item.requirementTitle}</p>
        <p className="text-xs opacity-50 mt-1">{formatDate(item.createdAt)}</p>
        <div className="flex flex-wrap gap-1.5 mt-3 text-[11px] font-medium"><span className="rounded-full bg-black/[.05] px-2 py-1">{formatBytes(item.outputSize)}</span><span className="rounded-full bg-black/[.05] px-2 py-1">{item.width}×{item.height}px</span></div>
        <div className="flex gap-2 mt-4"><a href={urls[item.id]} download={item.name} className="flex-1 text-center rounded-lg bg-accent text-white py-2.5 text-xs font-bold">Download</a><button onClick={() => remove(item.id)} className="rounded-lg border border-black/10 px-3 text-xs font-semibold">Delete</button></div>
      </article>)}
    </div>}
    <p className="text-[11px] opacity-40 mt-4">Privacy: history is stored locally in your browser using IndexedDB. It is not synced to a server or another device.</p>
  </section>;
}
