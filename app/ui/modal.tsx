import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';

const Modal = ({
  children,
  isOpen,
  closeModal,
}: {
  children: React.ReactNode;
  isOpen: boolean;
  closeModal: () => void;
}) => {
  return (
    <Dialog open={isOpen} onClose={closeModal}>
      <DialogBackdrop className="fixed inset-0 bg-black/40" />
      <div className="fixed left-0 right-0 top-16 flex w-screen items-center justify-center p-4">
        <DialogPanel className="rounded-lg bg-grey-100">{children}</DialogPanel>
      </div>
    </Dialog>
  );
};

export default Modal;
