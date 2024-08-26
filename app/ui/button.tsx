import type { IconType } from '@/app/ui/icon';
import Icon from '@/app/ui/icon';
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
    const variantClasses = clsx({
      'primary-button': variant === 'primary',
      'secondary-button': variant === 'secondary',
    });

    const typeClasses = clsx({
      'flex items-center gap-2 py-2 pl-3 pr-4': iconId && label,
      'padding-icon-only-button': iconId && !label,
      'px-4 py-2': !iconId && label,
    });

    const combinedClasses = clsx(
      'button-base',
      variantClasses,
      typeClasses,
      className,
    );

    return (
      <ButtonPrimitive className={combinedClasses} ref={ref} {...props}>
        {iconId && <Icon iconId={iconId} className="h-6 w-6" />}
        <span className="text-sm leading-none text-white">{label}</span>
      </ButtonPrimitive>
    );
  },
);

export default Button;
