'use client';

import Button from '@/app/ui/button';

const ContactListItemActions = () => {
  return (
    <div className="hidden items-center gap-2 group-hover:flex">
      <Button
        variant="secondary"
        iconId="mute"
        title="Mute contact"
        onClick={() => alert('Mute contact')}
      />
      <Button
        variant="secondary"
        iconId="call"
        title="Call contact"
        onClick={() => alert('Call contact')}
      />
      <Button variant="secondary" iconId="more" title="More actions" />
    </div>
  );
};

export default ContactListItemActions;
