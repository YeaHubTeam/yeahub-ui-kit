import { useContext } from 'react';
import { ModalContext } from './modalContext';

export const useDialogContext = () => {
  const context = useContext(ModalContext);

  if (context == null) {
    throw new Error('Modal components must be wrapped in <Modal />');
  }

  return context;
};
