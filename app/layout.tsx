import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['200', '300', '400', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Get Crate',
  description: 'Crate',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <Header />

        {children}
        <Footer />
      </body>
    </html>
  );
}
