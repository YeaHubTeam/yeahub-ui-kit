import { FC, cloneElement, isValidElement } from 'react';
import { useMergeRefs } from '@floating-ui/react';
import { useDialogContext } from './context/useDialogContext';

type ModalTriggerProps = {
  children: React.ReactNode;
  asChild?: boolean;
  triggerRef?: React.Ref<HTMLElement>;
} & React.HTMLProps<HTMLElement>;

export const ModalTrigger: FC<ModalTriggerProps> = ({
  children,
  asChild,
  triggerRef,
  ...props
}) => {
  const context = useDialogContext();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const childrenRef = (children as any).ref;
  const ref = useMergeRefs([context.refs.setReference, triggerRef, childrenRef]);
  if (asChild && isValidElement(children)) {
    return cloneElement(
      children,

      context.getReferenceProps({
        ref,
        ...props,
        ...children.props,
        'data-state': context.open ? 'open' : 'closed',
      })
    );
  }
  return (
    <button
      ref={ref}
      data-state={context.open ? 'open' : 'closed'}
      {...context.getReferenceProps(props)}
    >
      {children}
    </button>
  );
};
