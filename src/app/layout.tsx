import './globals.css';
import Navbar from '../../components/Navbar';

export const metadata = {
  title: 'Note Service',
  description: 'A simple note-taking app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="container mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}