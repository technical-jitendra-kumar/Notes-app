'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  
  // Why this nav approach for simplicity: App Router + active state styling
  return (
    <nav className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex space-x-4">
        <Link
          href="/add-note"
          className={`px-3 py-2 rounded ${
            pathname === '/add-note' ? 'bg-secondary text-primary' : 'hover:bg-secondary hover:text-primary'
          }`}
        >
          Add Note
        </Link>
        <Link
          href="/notes"
          className={`px-3 py-2 rounded ${
            pathname === '/notes' ? 'bg-secondary text-primary' : 'hover:bg-secondary hover:text-primary'
          }`}
        >
          View Notes
        </Link>
      </div>
    </nav>
  );
}