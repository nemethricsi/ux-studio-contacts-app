import type { Metadata } from 'next';
import { Lexend_Deca } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

export const glysa = localFont({
  src: './glysa-webfont.woff2',
  display: 'swap',
});

const lexendDeca = Lexend_Deca({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Contact app flow • UX Studio',
  description:
    "Efficiently manage contacts with UX Studio's user-friendly contact listing app.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lexendDeca.className} antialiased`}>{children}</body>
    </html>
  );
}
