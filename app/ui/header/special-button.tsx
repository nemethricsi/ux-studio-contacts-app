import type { IconType } from '@/app/ui/icon';
import Icon from '@/app/ui/icon';
import Text from '@/app/ui/text';
import { Button, ButtonProps } from '@headlessui/react';

interface SpecialButtonProps extends ButtonProps {
  label: string;
  title: string;
  iconId: IconType;
}

const SpecialButton = ({
  label,
  title,
  iconId,
  ...props
}: SpecialButtonProps) => {
  return (
    <Button
      className="interactive flex-shrink-0 rounded-full bg-grey-100"
      title={title}
      {...props}
    >
      <div className="rounded-full bg-gradient-to-b from-grey-20 to-transparent p-px">
        <div className="rounded-full bg-gradient-to-b from-grey-60/[.7] to-grey-60">
          <div className="flex items-center gap-2 rounded-full py-2 pl-3 pr-4 hover:bg-white/[.04] active:bg-white/[.04]">
            <Icon iconId={iconId} className="h-6 w-6" />
            <Text variant="body" className="text-white">
              {label}
            </Text>
          </div>
        </div>
      </div>
    </Button>
  );
};

export default SpecialButton;
