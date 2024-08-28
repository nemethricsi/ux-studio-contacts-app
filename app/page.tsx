'use client';

import ContactList from '@/app/ui/contact-list/contact-list';
import CreateForm from '@/app/ui/form/create-form';
import MainHeader from '@/app/ui/header/main-header';
import MobileHeader from '@/app/ui/header/mobile-header';
import Modal from '@/app/ui/modal';
import { useState } from 'react';

export default function Home() {
  const [open, setOpen] = useState(false);

  const openCreateModal = () => {
    setOpen(true);
  };

  const closeCreateModal = () => {
    setOpen(false);
  };

  return (
    <>
      <MobileHeader />
      <MainHeader openCreateModal={openCreateModal} />
      <main className="flex flex-grow select-none">
        <div className="hidden flex-grow md:flex" />
        <div className="basis-[768px] border-x border-grey-60 px-6 py-3">
          <ContactList />
        </div>
        <div className="hidden flex-grow md:flex" />
      </main>
      <Modal isOpen={open} closeModal={closeCreateModal}>
        <CreateForm />
      </Modal>
    </>
  );
}
