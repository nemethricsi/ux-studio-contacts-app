'use client';

import type { IconType } from '@/app/ui/icon';
import Icon from '@/app/ui/icon';
import Text from '@/app/ui/text';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { motion } from 'framer-motion';

interface DropdownMenuItem {
  label: string;
  iconId: IconType;
  onClick: () => void;
}

const menuItems: DropdownMenuItem[] = [
  {
    label: 'Edit',
    onClick: () => alert('TODO: Edit'),
    iconId: 'settings',
  },
  {
    label: 'Favourite',
    onClick: () => undefined,
    iconId: 'favourite',
  },
  {
    label: 'Remove',
    onClick: () => alert('TODO: Remove'),
    iconId: 'delete',
  },
];

const DropdownMenu = () => {
  return (
    <Menu>
      <MenuButton className="button-base secondary-button padding-icon-only-button interactive data-[open]:bg-grey-80">
        <Icon iconId="more" className="h-6 w-6 text-white" />
      </MenuButton>
      <MenuItems
        as={motion.div}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        anchor="bottom start"
        className="flex w-[219px] origin-top-right flex-col items-start rounded-lg bg-grey-80 [--anchor-gap:8px] focus:outline-none"
      >
        {menuItems.map(({ label, onClick, iconId }) => (
          <MenuItem>
            <button
              onClick={onClick}
              className="flex w-full items-center gap-3 bg-transparent px-[10px] py-3 hover:bg-grey-70 active:bg-grey-60 data-[active]:bg-grey-60 data-[focus]:bg-grey-70"
            >
              <Icon iconId={iconId} className="text-secondary h-5 w-5" />
              <Text variant="body">{label}</Text>
            </button>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
};

export default DropdownMenu;
