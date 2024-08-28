import Button from '@/app/ui/button';
import DropdownMenu from '@/app/ui/dropdown-menu';

const ContactListItemActions = ({ contactId, openEditModal }: { contactId: string; openEditModal: () => void }) => {
  return (
    <div className="flex items-center gap-2">
      <Button label="Mute" variant="secondary" iconId="mute" title="Mute contact" iconOnly />
      <Button label="Call" variant="secondary" iconId="call" title="Call contact" iconOnly />
      <DropdownMenu contactId={contactId} openEditModal={openEditModal} />
    </div>
  );
};

export default ContactListItemActions;
