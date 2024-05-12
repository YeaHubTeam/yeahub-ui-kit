import { type Placement } from '@floating-ui/react';

type Color = 'green' | 'yellow' | 'gray' | 'violet';

export interface TooltipProps {
  title: React.ReactNode;
  children?: React.ReactNode;
  placement?: Placement;
  offsetTooltip?: number;
  color?: Color;
  ariaLabel?: string;
  className?: string;
}
