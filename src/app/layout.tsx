import { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import './globals.css';
import { cls } from '@/lib';
import { Header } from '@/components/header/header';
import { Footer } from '@/components/footer/footer';

const inter = Inter({
  variable: '--font-inter',
});
const montserrat = Montserrat({
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: 'Home Page | AnyTech',
  description: 'Embrace the future of finance',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cls(inter.className, inter.variable, montserrat.variable)}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
