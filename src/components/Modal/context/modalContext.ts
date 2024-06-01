import { createContext } from 'react';
import { TNullable, useDialog } from '../../../hooks/useDialog';

/**
 * Контекст для использования хендлеров из useDialog и сеттеров для aria label, description
 */
export type ContextType =
  | (ReturnType<typeof useDialog> & {
      setLabelId: React.Dispatch<React.SetStateAction<TNullable<string>>>;
      setDescriptionId: React.Dispatch<React.SetStateAction<TNullable<string>>>;
    })
  | null;

export const ModalContext = createContext<ContextType>({} as ContextType);
