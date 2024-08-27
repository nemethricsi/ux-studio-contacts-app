'use client';

import ContactListItemActions from '@/app/ui/contact-list/contact-list-item-actions';
import Text from '@/app/ui/text';
import Image from 'next/image';
import { useState } from 'react';

interface ContactListItemProps {
  name: string;
  contactId: number;
  phoneNumber?: string;
  imageUrl?: string;
}

const ContactListItem = ({
  name,
  phoneNumber,
  imageUrl,
  contactId,
}: ContactListItemProps) => {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  return (
    <div
      className="flex items-center justify-between gap-3 py-3"
      onMouseEnter={() => setHoveredRow(contactId)}
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
              +36 01 234 5678
            </Text>
          )}
        </div>
      </div>
      {hoveredRow === contactId && <ContactListItemActions />}
    </div>
  );
};

export default ContactListItem;
