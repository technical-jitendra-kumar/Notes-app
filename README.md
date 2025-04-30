Note Service
A simple note-taking application built with Next.js, TypeScript, and Tailwind CSS. The app allows users to create and view notes, with data persisted client-side using localStorage. The UI is clean, responsive, and professional, with clear state management and error handling.
Features

Add notes with a title and content through a user-friendly form.
View a list of notes with titles and content snippets.
Persist notes in localStorage for client-side storage.
Responsive navigation between "Add Note" and "View Notes" pages.
Loading indicators and error banners for storage operations.
Styled with Tailwind CSS for a modern, professional look.

Setup & Run
Follow these steps to set up and run the project locally:

Clone the Repository:
git clone <your-repo-url>
cd note-service


Install Dependencies:
npm install


Run the Development Server:
npm run dev


Open the App:Open http://localhost:3000 in your browser. The app will default to the "Add Note" page.

Build for Production (optional):
npm run build
npm run start



Design Decisions
Below are the key design decisions and their rationale, addressing the "Why?" for each aspect of the project:

Storage Strategy:

Choice: Used localStorage with the key notes-app for client-side persistence.
Why: localStorage provides a simple, reliable way to store notes without requiring a backend, aligning with the assignment’s no-backend requirement. The notes-app key is specific to avoid conflicts with other apps, and JSON.stringify/parse ensures data integrity.


Component Structure:

Choice: Modular components (AddNote.tsx, NotesList.tsx, Navbar.tsx, ErrorBanner.tsx) organized under src/components/.
Why: Modular components promote reusability, maintainability, and separation of concerns. Each component handles a specific responsibility (e.g., form input, list rendering, navigation), making the codebase easier to understand and extend.


State Management:

Choice: Used useState for form inputs and note list state, with useEffect for syncing localStorage to state on mount.
Why: useState is sufficient for managing simple, component-level state like form inputs and the notes array. useEffect ensures notes are loaded from localStorage when the NotesList component mounts, keeping state in sync with storage efficiently.


Styling:

Choice: Tailwind CSS with utility-first classes, customized with primary (#1E3A8A) and secondary (#DBEAFE) colors.
Why: Tailwind CSS enables rapid development of responsive, professional UI with minimal custom CSS. Utility classes like bg-gray-100 and rounded-lg create a clean, card-based design, while custom colors ensure a consistent brand aesthetic.


Navigation:

Choice: Next.js App Router with a Navbar component linking to /add-note and /notes routes.
Why: The App Router simplifies page-based routing, and a minimal Navbar with active state styling (using usePathname) provides intuitive navigation. This approach is lightweight and meets the assignment’s requirement for simple navigation.



Deployment
The app is deployed on Vercel for a live demo. To deploy your own instance:

Push the project to a GitHub repository.
Sign in to Vercel and create a new project.
Import your GitHub repository and configure:
Framework Preset: Next.js
Build Command: npm run build
Output Directory: .next
Install Command: npm install


Deploy and obtain the live URL.

Live Demo

GitHub Repo: <your-repo-url>
Live Site: <vercel-or-netlify-url>

Technologies Used

Next.js: For server-side rendering and routing.
TypeScript: For type safety and improved developer experience.
Tailwind CSS: For rapid, utility-first styling.
localStorage: For client-side data persistence.
React: For building reusable UI components.
