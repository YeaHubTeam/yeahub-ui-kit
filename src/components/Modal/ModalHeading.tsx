import { FC, useId, useLayoutEffect } from 'react';
import { useDialogContext } from './context/useDialogContext';

type ModalHeadingProps = React.HTMLAttributes<HTMLHeadingElement> & {
  headingRef?: React.Ref<HTMLHeadingElement>;
  children?: React.ReactNode;
};

export const ModalHeading: FC<ModalHeadingProps> = ({
  headingRef,
  children,
  ...otherProps
}) => {
  const { setLabelId } = useDialogContext();
  const id = useId();

  useLayoutEffect(() => {
    setLabelId(id);
    return () => setLabelId(undefined);
  }, [id, setLabelId]);

  return (
    <h2 {...otherProps} ref={headingRef} id={id}>
      {children}
    </h2>
  );
};
