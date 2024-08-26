'use client';

import Button from '@/app/ui/button';
import SpecialButton from '@/app/ui/special-button';

const HeaderActions = () => {
  return (
    <div className="flex items-center gap-6">
      <div className="flex items-center gap-2">
        <Button variant="secondary" iconId="settings" />
        <button>user menu</button>
      </div>
      <SpecialButton
        label="Add new"
        onClick={() => alert('Add new contact here!')}
      />
    </div>
  );
};

export default HeaderActions;
