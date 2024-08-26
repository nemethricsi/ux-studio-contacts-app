import Button from '@/app/ui/button';

const ContactListItemActions = () => {
  return (
    <div className="flex items-center gap-2 group-hover:flex md:hidden">
      <Button
        label="Mute"
        variant="secondary"
        iconId="mute"
        title="Mute contact"
        iconOnly
      />
      <Button
        label="Call"
        variant="secondary"
        iconId="call"
        title="Call contact"
        iconOnly
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
