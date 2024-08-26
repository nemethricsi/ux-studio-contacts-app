import type { ButtonProps } from '@headlessui/react';
import { Button } from '@headlessui/react';
import Image from 'next/image';

const ProfileMenuButton = (props: ButtonProps) => {
  return (
    <Button
      className="button-base secondary-button padding-icon-only-button"
      title="Open profile menu"
      {...props}
    >
      <Image
        src="/images/user.png"
        alt="user avatar"
        width={24}
        height={24}
        className="rounded-full border-[1.5px] border-white"
      />
    </Button>
  );
};

export default ProfileMenuButton;
