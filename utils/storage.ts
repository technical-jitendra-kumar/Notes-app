export interface Note {
  id: string;
  title: string;
  content: string;
}

const STORAGE_KEY = 'notes-app';

export function saveNote(note: Note): Promise<void> {
  return new Promise((resolve, reject) => {
    try {
      const notes = getNotes();
      notes.push(note);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
      resolve();
    } catch (err) {
      reject(err);
    }
  });
}

export function getNotes(): Note[] {
  try {
    const notes = localStorage.getItem(STORAGE_KEY);
    return notes ? JSON.parse(notes) : [];
  } catch (err) {
    throw new Error('Failed to read notes');
  }
}