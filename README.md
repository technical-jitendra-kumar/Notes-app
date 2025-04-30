# Note Service

A simple note-taking application built with **Next.js**, **TypeScript**, and **Tailwind CSS**. The app allows users to create, view, and manage notes, with data persisted client-side using **localStorage**. The UI is clean, responsive, and professional, with clear state management and error handling.

## Features

- **Create Notes**: Add notes with a title and content through a user-friendly form.
- **View Notes**: Display a list of notes with titles and content snippets.
- **Client-Side Persistence**: Store notes in `localStorage` for client-side storage, ensuring notes persist across sessions.
- **Responsive Navigation**: Seamless navigation between "Add Note" and "View Notes" pages.
- **Loading Indicators & Error Handling**: Display loading states and error banners for storage operations, enhancing the user experience.
- **Modern UI**: Clean, professional design using **Tailwind CSS** for a sleek, mobile-first interface.

## Setup & Run

To get the project running locally, follow these steps:

### Clone the Repository

```bash
git clone https://github.com/technical-jitendra-kumar/Notes-app.git
cd notes-app
```

### Install Dependencies

Install required dependencies using npm:

```bash
npm install
```

### Run the Development Server

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The app will default to the "Add Note" page.

### Build for Production (Optional)

If you'd like to build the app for production, use the following commands:

```bash
npm run build
npm run start
```

## Design Decisions

Here are the key design choices and their rationale:

### Storage Strategy

- **Choice**: localStorage with the key `notes-app`.
- **Why**: `localStorage` provides a simple and reliable way to store notes client-side, meeting the assignment’s no-backend requirement. Using a unique key (`notes-app`) prevents conflicts with other localStorage entries. Data integrity is ensured with `JSON.stringify/parse`.

### Component Structure

- **Choice**: Modular components (e.g., `AddNote.tsx`, `NotesList.tsx`, `Navbar.tsx`, `ErrorBanner.tsx`) within the `src/components/` directory.
- **Why**: A modular structure promotes reusability, maintainability, and separation of concerns. Each component is focused on a single responsibility (e.g., handling form inputs, rendering the note list, managing navigation), making the codebase cleaner and easier to extend.

### State Management

- **Choice**: `useState` for managing form inputs and the notes list, with `useEffect` for syncing `localStorage` with the state on component mount.
- **Why**: `useState` works well for managing component-level state, while `useEffect` ensures the notes are loaded from `localStorage` when the `NotesList` component mounts. This keeps the UI in sync with the persisted data efficiently.

### Styling

- **Choice**: Tailwind CSS with utility-first classes, customized with a primary color (`#1E3A8A`) and secondary color (`#DBEAFE`).
- **Why**: Tailwind CSS enables rapid development of responsive, professional UIs with minimal custom CSS. Utility classes like `bg-gray-100` and `rounded-lg` create a clean card-based design, while the custom color scheme ensures a consistent and modern aesthetic.

### Navigation

- **Choice**: Next.js App Router with a `Navbar` component linking to `/add-note` and `/notes` routes.
- **Why**: The App Router simplifies page-based routing, and a minimal `Navbar` with active state styling (using `usePathname`) provides intuitive navigation between pages. This approach keeps the app lightweight and easy to navigate.

## Deployment

The app is deployed on **Render** for a live demo. To deploy your own instance:

1. Push the project to a **GitHub repository**.
2. Sign in to **Render** and create a new **Web Service**.
3. Import your GitHub repository and configure:
   - **Runtime**: Node
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm run start`
4. Deploy and obtain your live URL.

## Live Demo

- **GitHub Repo**: [https://github.com/technical-jitendra-kumar/Notes-app](https://github.com/technical-jitendra-kumar/Notes-app)
- **Live Site**: [https://notes-vfcg.onrender.com](https://notes-vfcg.onrender.com)

## Technologies Used

- **Next.js**: For server-side rendering and routing.
- **TypeScript**: For type safety and a better developer experience.
- **Tailwind CSS**: For rapid, utility-first styling.
- **localStorage**: For client-side data persistence.
- **React**: For building reusable UI components.
