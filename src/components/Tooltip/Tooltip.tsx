import { CSSProperties, FC, useRef, useState } from 'react';
import { TooltipProps } from './types';
import cn from 'classnames';

import {
  FloatingArrow,
  FloatingPortal,
  arrow,
  autoUpdate,
  flip,
  offset,
  shift,
  useFloating,
  useHover,
  useInteractions,
  useRole,
  useTransitionStyles,
} from '@floating-ui/react';
import { prefix } from '../../prefix';
import { COLORS } from './constants/colors';

const compPrefix = `${prefix}-tooltip`;

export const Tooltip: FC<TooltipProps> = ({
  title,
  ariaLabel,
  children,
  className,
  color = 'green',
  offsetTooltip = 10,
  placement = 'top',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const arrowRef = useRef<SVGSVGElement>(null);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement,
    middleware: [
      offset(offsetTooltip),
      flip({
        crossAxis: placement.includes('-'),
        fallbackAxisSideDirection: 'start',
        padding: 5,
      }),
      shift(),
      arrow({
        element: arrowRef,
      }),
    ],
    whileElementsMounted: autoUpdate,
  });

  const hover = useHover(context, { move: false });
  const role = useRole(context, { role: 'tooltip' });

  const { getReferenceProps, getFloatingProps } = useInteractions([hover, role]);
  const { styles } = useTransitionStyles(context);

  const classNames = cn(compPrefix, className);
  const themeStyle: CSSProperties = {
    border: `1px solid ${COLORS[color]}`,
  };

  return (
    <>
      <span ref={refs.setReference} {...getReferenceProps()}>
        {children}
      </span>
      {isOpen && title && (
        <FloatingPortal>
          <div
            aria-label={ariaLabel}
            className={classNames}
            ref={refs.setFloating}
            style={{ ...styles, ...floatingStyles, ...themeStyle }}
            {...getFloatingProps()}
          >
            <FloatingArrow
              tipRadius={1}
              fill="white"
              stroke={COLORS[color]}
              strokeWidth={1}
              height={8}
              width={16}
              context={context}
              ref={arrowRef}
            />
            {title}
          </div>
        </FloatingPortal>
      )}
    </>
  );
};
