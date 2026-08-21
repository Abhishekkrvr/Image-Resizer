export type HistoryItem = {
  id: string;
  name: string;
  requirementId: string;
  requirementTitle: string;
  type: string;
  originalSize: number;
  outputSize: number;
  width: number;
  height: number;
  createdAt: number;
  blob: Blob;
};

const DB_NAME = 'realimageresizer-history';
const STORE_NAME = 'files';
const DB_VERSION = 1;

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        const store = db.createObjectStore(STORE_NAME, { keyPath: 'id' });
        store.createIndex('createdAt', 'createdAt');
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error ?? new Error('Could not open history'));
  });
}

export async function saveHistory(item: HistoryItem): Promise<void> {
  if (typeof window === 'undefined' || !('indexedDB' in window)) return;
  const db = await openDB();
  await new Promise<void>((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    tx.objectStore(STORE_NAME).put(item);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error ?? new Error('Could not save history'));
  });
  db.close();
}

export async function getHistory(): Promise<HistoryItem[]> {
  if (typeof window === 'undefined' || !('indexedDB' in window)) return [];
  const db = await openDB();
  const items = await new Promise<HistoryItem[]>((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readonly');
    const request = tx.objectStore(STORE_NAME).getAll();
    request.onsuccess = () => resolve((request.result as HistoryItem[]).sort((a, b) => b.createdAt - a.createdAt));
    request.onerror = () => reject(request.error ?? new Error('Could not read history'));
  });
  db.close();
  return items;
}

export async function deleteHistory(id: string): Promise<void> {
  if (typeof window === 'undefined' || !('indexedDB' in window)) return;
  const db = await openDB();
  await new Promise<void>((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    tx.objectStore(STORE_NAME).delete(id);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error ?? new Error('Could not delete history item'));
  });
  db.close();
}

export async function clearHistory(): Promise<void> {
  if (typeof window === 'undefined' || !('indexedDB' in window)) return;
  const db = await openDB();
  await new Promise<void>((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    tx.objectStore(STORE_NAME).clear();
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error ?? new Error('Could not clear history'));
  });
  db.close();
}
