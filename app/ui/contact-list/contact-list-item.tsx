'use client';

import ContactListItemActions from '@/app/ui/contact-list/contact-list-item-actions';
import Text from '@/app/ui/text';
import type { Contact } from '@prisma/client';
import Image from 'next/image';
import { useState } from 'react';

const ContactListItem = ({
  contact: { id, name, imageUrl, phoneNumber },
}: {
  contact: Contact;
}) => {
  const [hoveredRow, setHoveredRow] = useState<string | null>(null);

  return (
    <div
      className="flex items-center justify-between gap-3 py-3"
      onMouseEnter={() => setHoveredRow(id)}
      onMouseLeave={() => setHoveredRow(null)}
    >
      <div className="flex items-center gap-4">
        <div className="rounded-full bg-grey-70 p-px">
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
              {phoneNumber}
            </Text>
          )}
        </div>
      </div>
      {hoveredRow === id && <ContactListItemActions contactId={id} />}
    </div>
  );
};

export default ContactListItem;
