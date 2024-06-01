import { FC } from 'react';

import { ModalProps } from './types';
import { useDialog } from '../../hooks/useDialog';
import { ModalContext } from './context/modalContext';

export const Modal: FC<ModalProps> = ({ children, ...otherProps }) => {
  const dialog = useDialog(otherProps);
  return <ModalContext.Provider value={dialog}>{children}</ModalContext.Provider>;
};
