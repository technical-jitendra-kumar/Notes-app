'use client';

import { useState, useEffect } from 'react';
import { getNotes } from '../utils/storage';
import ErrorBanner from './ErrorBanner';

interface Note {
  id: string;
  title: string;
  content: string;
}

export default function NotesList() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Why useEffect to sync storage → state: Ensures notes load on mount and updates state
  useEffect(() => {
    try {
      const storedNotes = getNotes();
      setNotes(storedNotes);
    } catch (err) {
      setError('Failed to load notes. Please refresh.');
    }
  }, []);

  return (
    <div>
      {error && <ErrorBanner message={error} />}
      {notes.length === 0 ? (
        <p className="text-gray-500">No notes yet. Add one!</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {notes.map((note) => (
            <div key={note.id} className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold text-primary">Title: {note.title}</h2>
              <p className="text-gray-600 line-clamp-3">Content: {note.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}