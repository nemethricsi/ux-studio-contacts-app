'use client';

import { useContacts } from '@/app/hooks/useContacts';
import type { IconType } from '@/app/ui/icon';
import Icon from '@/app/ui/icon';
import Text from '@/app/ui/text';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { motion } from 'framer-motion';

interface DropdownMenuItem {
  id: number;
  label: string;
  iconId: IconType;
  onClick: () => void;
}

const DropdownMenu = ({ contactId, openEditModal }: { contactId: string; openEditModal: () => void }) => {
  const { deleteContactMutation } = useContacts();

  const handleDelete = () => {
    deleteContactMutation.mutate(contactId);
  };

  const menuItems: DropdownMenuItem[] = [
    {
      id: 1,
      label: 'Edit',
      onClick: openEditModal,
      iconId: 'settings',
    },
    {
      id: 2,
      label: 'Favourite',
      onClick: () => undefined,
      iconId: 'favourite',
    },
    {
      id: 3,
      label: 'Remove',
      onClick: handleDelete,
      iconId: 'delete',
    },
  ];

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
        {menuItems.map(({ id, label, onClick, iconId }) => (
          <MenuItem key={id}>
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
