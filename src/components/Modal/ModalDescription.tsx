import { FC, useId, useLayoutEffect } from 'react';
import { useDialogContext } from './context/useDialogContext';

type ModalDescriptionProps = React.HTMLAttributes<HTMLParagraphElement> & {
  descriprionRef?: React.Ref<HTMLHeadingElement>;
  children?: React.ReactNode;
};

export const ModalDescription: FC<ModalDescriptionProps> = ({
  descriprionRef,
  children,
  ...otherProps
}) => {
  const { setDescriptionId } = useDialogContext();
  const id = useId();

  // Устанавливает `aria-describedby` только для корневого элемента Modal
  // если этот компонент смонтирован внутри него.
  useLayoutEffect(() => {
    setDescriptionId(id);
    return () => setDescriptionId(undefined);
  }, [id, setDescriptionId]);

  return (
    <p {...otherProps} ref={descriprionRef} id={id}>
      {children}
    </p>
  );
};
