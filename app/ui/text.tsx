import clsx from 'clsx';

type TextVariant = 'h1' | 'h2' | 'h3' | 'body' | 'message';

interface TextProps {
  variant: TextVariant;
  children: React.ReactNode;
  className?: string;
}

const styles: Record<TextVariant, string> = {
  h1: 'font-serif text-[32px] leading-[48px] tracking-[0%]',
  h2: 'font-serif text-[24px] leading-[40px] tracking-[0%]',
  h3: 'text-[16px] leading-[24px] font-normal tracking-[1%]',
  body: 'text-[14px] leading-[20px] font-normal tracking-[1%]',
  message: 'text-[12px] leading-[12px] font-normal tracking-[1%]',
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

  return (
    <Component className={clsx(styles[variant], className)}>
      {children}
    </Component>
  );
};

export default Text;
