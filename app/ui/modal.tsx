import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import { AnimatePresence, motion } from 'framer-motion';

const Modal = ({
  children,
  isOpen,
  closeModal,
}: {
  children: React.ReactNode;
  isOpen: boolean;
  closeModal: () => void;
}) => {
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, delay: 0.1 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  };

  const panelVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
    exit: { opacity: 0, y: 20, transition: { duration: 0.25 } },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog open={isOpen} onClose={closeModal}>
          <DialogBackdrop
            as={motion.div}
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-black/40"
          />
          <div className="fixed left-0 right-0 top-[164px] flex w-screen items-center justify-center p-4">
            <DialogPanel
              as={motion.div}
              variants={panelVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="rounded-lg bg-grey-100"
            >
              {children}
            </DialogPanel>
          </div>
        </Dialog>
      )}
    </AnimatePresence>
  );
};

export default Modal;
