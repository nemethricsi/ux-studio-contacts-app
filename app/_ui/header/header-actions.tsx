'use client';

import Button from '@/app/_ui/button';
import ProfileMenuButton from '@/app/_ui/header/profile-menu-button';
import SpecialButton from '@/app/_ui/header/special-button';

const HeaderActions = ({ openCreateModal }: { openCreateModal: () => void }) => {
  return (
    <div className="flex items-center gap-6">
      <div className="flex items-center gap-2">
        <Button label="Settings" iconOnly variant="secondary" iconId="settings" title="Open settings" />
        <ProfileMenuButton />
      </div>
      <SpecialButton label="Add new" title="Add new contact" iconId="add" onClick={openCreateModal} />
    </div>
  );
};

export default HeaderActions;
