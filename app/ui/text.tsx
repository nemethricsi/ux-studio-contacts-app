import { glysa } from '@/app/fonts';
import clsx from 'clsx';

type TextVariant = 'h1' | 'h2' | 'h3' | 'body' | 'message';

interface TextProps {
  variant: TextVariant;
  children: React.ReactNode;
  className?: string;
}

const styles: Record<TextVariant, string> = {
  h1: `${glysa.className} text-[32px] leading-[48px] tracking-normal `,
  h2: `${glysa.className} text-2xl leading-10 tracking-normal`,
  h3: 'text-base font-normal tracking-[0.01em]',
  body: 'text-sm font-normal tracking-[0.01em]',
  message: 'text-xs font-normal tracking-[0.01em]',
};

const variantToComponent: Record<TextVariant, keyof JSX.IntrinsicElements> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  body: 'p',
  message: 'p',
};

const Text = ({ variant, children, className }: TextProps) => {
  const Component = variantToComponent[variant];

  return <Component className={clsx(styles[variant], className)}>{children}</Component>;
};

export default Text;
