'use client';

import Button from '@/app/ui/button';
import ProfileMenuButton from '@/app/ui/header/profile-menu-button';
import SpecialButton from '@/app/ui/header/special-button';

const HeaderActions = () => {
  return (
    <div className="flex items-center gap-6">
      <div className="flex items-center gap-2">
        <Button
          label="Settings"
          iconOnly
          variant="secondary"
          iconId="settings"
          title="Open settings"
        />
        <ProfileMenuButton />
      </div>
      <SpecialButton
        label="Add new"
        title="Add new contact"
        iconId="add"
        onClick={() => alert('Add new contact here!')}
      />
    </div>
  );
};

export default HeaderActions;
