import ContactListItemActions from '@/app/ui/contact-list-item-actions';
import Text from '@/app/ui/text';
import Image from 'next/image';

const ContactListItem = () => {
  return (
    <div className="group flex items-center justify-between py-3">
      <div className="flex items-center gap-4">
        <div className="rounded-full bg-grey-70 p-[1px]">
          <Image
            src="/images/default.png"
            alt="default avatar"
            width={38}
            height={38}
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col">
          <Text variant="body">Jonas Jones</Text>
          <Text variant="message" className="text-secondary">
            +36 01 234 5678
          </Text>
        </div>
      </div>
      <ContactListItemActions />
    </div>
  );
};

export default ContactListItem;
