import { Lexend_Deca } from 'next/font/google';
import localFont from 'next/font/local';

export const glysa = localFont({
  src: './glysa-webfont.woff2',
  display: 'swap',
  weight: '500',
  style: 'normal',
});

export const lexendDeca = Lexend_Deca({ subsets: ['latin'] });
