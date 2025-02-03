import { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Home Page | AnyTech',
  description: 'Embrace the future of finance',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
