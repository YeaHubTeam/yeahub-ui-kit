import {
  useMergeRefs,
  FloatingPortal,
  FloatingOverlay,
  FloatingFocusManager,
} from '@floating-ui/react';
import { FC } from 'react';
import { prefix } from '../../prefix';
import { useDialogContext } from './context/useDialogContext';
import { Icon } from '../Icon';

const compPrefix = `${prefix}-modal`;

interface ModalContent extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  contentRef?: React.Ref<HTMLDivElement>;
  children?: React.ReactNode;
}

export const ModalContent: FC<ModalContent> = ({
  contentRef,
  children,
  ...otherProps
}) => {
  const {
    context: floatingContext,
    setOpen: handleCloseModal,
    ...context
  } = useDialogContext();

  const ref = useMergeRefs([context.refs.setFloating, contentRef]);

  if (!floatingContext.open) return null;

  return (
    <FloatingPortal>
      <FloatingOverlay className={`${compPrefix}-overlay`} lockScroll>
        <FloatingFocusManager context={floatingContext}>
          <div
            ref={ref}
            aria-labelledby={context.labelId ?? undefined}
            aria-describedby={context.descriptionId ?? undefined}
            {...context.getFloatingProps(otherProps)}
            className={`${compPrefix}-content`}
          >
            {children}

            <button onClick={() => handleCloseModal(false)}>
              <Icon
                role="img"
                icon="xCircle"
                color="--palette-ui-white-900"
                aria-label="Close"
                focusable="false"
              />
            </button>
          </div>
        </FloatingFocusManager>
      </FloatingOverlay>
    </FloatingPortal>
  );
};
