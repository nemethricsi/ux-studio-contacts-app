import ContactListItemActions from '@/app/ui/contact-list/contact-list-item-actions';
import Text from '@/app/ui/text';
import Image from 'next/image';

interface ContactListItemProps {
  name: string;
  phoneNumber?: string;
  imageUrl?: string;
}

const ContactListItem = ({
  name,
  phoneNumber,
  imageUrl,
}: ContactListItemProps) => {
  return (
    <div className="group flex items-center justify-between gap-3 py-3">
      <div className="flex items-center gap-4">
        <div className="rounded-full bg-grey-70 p-[1px]">
          <Image
            src={imageUrl ? imageUrl : '/images/default.png'}
            alt="default avatar"
            width={38}
            height={38}
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col">
          <Text variant="h3">{name}</Text>
          {phoneNumber && (
            <Text variant="message" className="text-secondary">
              +36 01 234 5678
            </Text>
          )}
        </div>
      </div>
      <ContactListItemActions />
    </div>
  );
};

export default ContactListItem;
