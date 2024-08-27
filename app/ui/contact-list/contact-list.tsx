'use client';

import { useContacts } from '@/app/hooks/useContacts';
import Text from '@/app/ui/text';
import Image from 'next/image';
import ContactListItem from './contact-list-item';

const ContactList = () => {
  const {
    contactsQuery: { data: contacts, isError, isLoading },
  } = useContacts();

  return (
    <>
      {isLoading && <Text variant="h2">Loading...</Text>}
      {!isLoading && contacts?.length === 0 && (
        <div className="mt-4 flex flex-col items-center gap-4">
          <Image
            src="/images/add-contact.svg"
            alt="empty state illustration"
            width={200}
            height={200}
          />
          <Text variant="h3" className="text-secondary text-center">
            No contacts yet. Click "Add new" above to get started!
          </Text>
        </div>
      )}
      {!isLoading &&
        contacts?.map((contact) => (
          <ContactListItem key={contact.id} contact={contact} />
        ))}
    </>
  );
};

export default ContactList;
