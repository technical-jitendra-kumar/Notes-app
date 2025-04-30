'use client';

import NotesList from '../../../components/NotesList';

export default function NotesPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-primary">Your Notes</h1>
      <NotesList />
    </div>
  );
}