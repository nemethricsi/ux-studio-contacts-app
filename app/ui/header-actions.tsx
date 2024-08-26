'use client';

import Button from '@/app/ui/button';
import ProfileMenuButton from '@/app/ui/profile-menu-button';
import SpecialButton from '@/app/ui/special-button';

const HeaderActions = () => {
  return (
    <div className="flex items-center gap-6">
      <div className="flex items-center gap-2">
        <Button
          variant="secondary"
          iconId="settings"
          title="Open settings"
          onClick={() => alert('Open Settings Menu')}
        />
        <ProfileMenuButton onClick={() => alert('Open Profile Menu')} />
      </div>
      <SpecialButton
        label="Add new"
        title="Add new contact"
        onClick={() => alert('Add new contact here!')}
      />
    </div>
  );
};

export default HeaderActions;
