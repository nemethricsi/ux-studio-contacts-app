import Providers from '@/app/lib/providers';
import type { Metadata } from 'next';
import { Lexend_Deca } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

const glysa = localFont({
  src: './glysa-webfont.woff2',
  display: 'swap',
});

const lexendDeca = Lexend_Deca({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Contacts Made Easy • UX Studio',
  description: "Proof that I'm not just a pretty interface. Hope we're going to create more amazing stuff together!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${lexendDeca.className} flex h-full flex-col bg-grey-100 text-white antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
