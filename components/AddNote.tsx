'use client';

import { useState } from 'react';
import { saveNote } from '../utils/storage'; // Adjust the import path as necessary
import ErrorBanner from './ErrorBanner';

interface Note {
  id: string;
  title: string;
  content: string;
}

export default function AddNote() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Why I chose useState + this submit handler: Controlled inputs for real-time validation, async for storage
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setError(null);

    try {
      const note: Note = {
        id: Date.now().toString(),
        title,
        content,
      };
      await saveNote(note);
      setTitle('');
      setContent('');
    } catch (err) {
      setError('Failed to save note. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      {error && <ErrorBanner message={error} />}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-primary focus:border-primary"
            required
          />
        </div>
        <div>
          <label htmlFor="content" className="block text-sm font-medium text-gray-700">
            Content
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-primary focus:border-primary"
            rows={4}
            required
          />
        </div>
        <button
          type="submit"
          disabled={isSaving}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-900 disabled:bg-gray-400 flex items-center"
        >
          {isSaving && (
            <svg
              className="animate-spin h-5 w-5 mr-2"
              viewBox="0 0 24 24"
            >
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
            </svg>
          )}
          {isSaving ? 'Saving...' : 'Save Note'} {/* Why show spinner here: Visual feedback for async operation */}
        </button>
      </form>
    </div>
  );
}