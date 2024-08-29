import type { IconType } from '@/app/_ui/icon';
import Icon from '@/app/_ui/icon';
import type { ButtonProps as ButtonPrimitiveProps } from '@headlessui/react';
import { Button as ButtonPrimitive } from '@headlessui/react';
import clsx from 'clsx';
import * as React from 'react';

type ButtonVariant = 'primary' | 'secondary';

interface BaseButtonProps extends ButtonPrimitiveProps {
  variant: ButtonVariant;
  label: string;
  iconId?: IconType;
  iconOnly?: boolean;
}

type ButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ label, className = '', variant, iconId, iconOnly = false, ...props }, ref) => {
    const variantClasses = clsx({
      'primary-button': variant === 'primary',
      'secondary-button': variant === 'secondary',
    });

    const typeClasses = clsx({
      'flex items-center gap-2 py-2 pl-3 pr-4': iconId && !iconOnly,
      'padding-icon-only-button': iconId && iconOnly,
      'px-4 py-2': !iconId,
    });

    const combinedClasses = clsx('button-base', variantClasses, typeClasses, className);

    return (
      <ButtonPrimitive className={combinedClasses} ref={ref} {...props}>
        {iconId && <Icon iconId={iconId} className="h-6 w-6 flex-shrink-0" />}
        <span
          className={clsx('flex-shrink-0 text-sm leading-none text-white', {
            'sr-only': iconOnly,
          })}
        >
          {label}
        </span>
      </ButtonPrimitive>
    );
  },
);

Button.displayName = 'Button';

export default Button;
