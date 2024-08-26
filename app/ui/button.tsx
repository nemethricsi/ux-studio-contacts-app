import type { IconType } from '@/app/ui/icon';
import Icon from '@/app/ui/icon';
import Text from '@/app/ui/text';
import type { ButtonProps as ButtonPrimitiveProps } from '@headlessui/react';
import { Button as ButtonPrimitive } from '@headlessui/react';
import clsx from 'clsx';
import * as React from 'react';

type ButtonVariant = 'primary' | 'secondary';

interface BaseButtonProps extends ButtonPrimitiveProps {
  label?: string;
  variant: ButtonVariant;
  children?: React.ReactNode;
  iconId?: IconType;
}

type ButtonProps = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ label, className, variant, iconId, ...props }, ref) => {
    const baseClasses = 'interactive rounded-lg transition duration-150';

    const variantClasses = clsx({
      'bg-grey-60 hover:bg-grey-50 active:bg-grey-40': variant === 'primary',
      'bg-transparent hover:bg-grey-90 active:bg-grey-80':
        variant === 'secondary',
    });

    const typeClasses = clsx({
      'flex items-center gap-2 py-2 pl-3 pr-4': iconId && label,
      'p-2': iconId && !label,
      'px-4 py-2': !iconId && label,
    });

    const combinedClasses = clsx(
      baseClasses,
      variantClasses,
      typeClasses,
      className,
    );

    return (
      <ButtonPrimitive className={combinedClasses} ref={ref} {...props}>
        {iconId && <Icon iconId={iconId} className="h-6 w-6" />}
        <Text variant="body" className="text-white">
          {label}
        </Text>
      </ButtonPrimitive>
    );
  },
);

export default Button;
