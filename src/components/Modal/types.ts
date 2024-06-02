import { DialogProps } from '../../hooks/useDialog';

export type ModalProps = DialogProps & {
  children?: React.ReactNode;
};
