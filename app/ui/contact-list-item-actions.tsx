'use client';

import Button from '@/app/ui/button';

const ContactListItemActions = () => {
  return (
    <div className="hidden items-center gap-2 group-hover:flex">
      <Button
        label="Mute"
        variant="secondary"
        iconId="mute"
        title="Mute contact"
        iconOnly
        onClick={() => alert('Mute contact')}
      />
      <Button
        label="Call"
        variant="secondary"
        iconId="call"
        title="Call contact"
        iconOnly
        onClick={() => alert('Call contact')}
      />
      <Button
        label="More"
        variant="secondary"
        iconId="more"
        iconOnly
        title="More actions"
      />
    </div>
  );
};

export default ContactListItemActions;
