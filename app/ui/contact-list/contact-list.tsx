'use client';

import { useContacts } from '@/app/hooks/useContacts';
import Text from '@/app/ui/text';
import ContactListItem from './contact-list-item';

const ContactList = () => {
  const {
    contactsQuery: { data: contacts, isError, isLoading },
  } = useContacts();

  return (
    <>
      {isLoading && <Text variant="h2">Loading...</Text>}
      {!isLoading && contacts?.length === 0 && (
        <Text variant="h3">No contacts found.</Text>
      )}
      {!isLoading &&
        contacts?.map((contact) => (
          <ContactListItem key={contact.id} contact={contact} />
        ))}
    </>
  );
};

export default ContactList;
