import '@/styles/globals.css'
import '../styles/Home.module.css';
import '../styles/scrollup.css';
import '../styles/home.css';

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    );
  }