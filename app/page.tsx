'use client';

import ContactList from '@/app/_ui/contact-list/contact-list';
import CreateForm from '@/app/_ui/form/create-form';
import MainHeader from '@/app/_ui/header/main-header';
import MobileHeader from '@/app/_ui/header/mobile-header';
import Modal from '@/app/_ui/modal';
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
      <div className="hidden h-24 border-b border-grey-60 md:flex">
        <div className="flex-grow" />
        <div className="basis-[768px] border-x border-grey-60" />
        <div className="flex-grow" />
      </div>
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
