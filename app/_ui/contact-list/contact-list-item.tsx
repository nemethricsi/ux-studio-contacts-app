'use client';

import ContactListItemActions from '@/app/_ui/contact-list/contact-list-item-actions';
import EditForm from '@/app/_ui/form/edit-form';
import Modal from '@/app/_ui/modal';
import Text from '@/app/_ui/text';
import type { Contact } from '@prisma/client';
import Image from 'next/image';
import { useState } from 'react';

const ContactListItem = ({ contact }: { contact: Contact }) => {
  const { id, name, imageUrl, phoneNumber } = contact;
  const [hoveredRow, setHoveredRow] = useState<string | null>(null);
  const [isOpen, setisOpen] = useState(false);

  const openEditModal = () => {
    setisOpen(true);
  };

  const closeEditModal = () => {
    setisOpen(false);
  };

  return (
    <>
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
        {hoveredRow === id && <ContactListItemActions contactId={id} openEditModal={openEditModal} />}
      </div>
      <Modal isOpen={isOpen} closeModal={closeEditModal}>
        <EditForm contact={contact} />
      </Modal>
    </>
  );
};

export default ContactListItem;
