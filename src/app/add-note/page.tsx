'use client';

import AddNote from '../../../components/AddNote';

export default function AddNotePage() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-primary">Add a Note</h1>
      <AddNote />
    </div>
  );
}