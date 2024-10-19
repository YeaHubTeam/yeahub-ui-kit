import { UseHoverProps, type Placement } from '@floating-ui/react';

type Color = 'green' | 'yellow' | 'gray' | 'violet';

/**
 * Props for the Tooltip component.
 *
 * @property {React.ReactNode} title - The content of the tooltip.
 * @property {React.ReactNode} [children] - The children nodes of the tooltip.
 * @property {Placement} [placement] - The placement of the tooltip relative to its target. Default is 'top'.
 * @property {number} [offsetTooltip] - The offset of the tooltip from its target in pixels. Default is 8.
 * @property {Color} [color] - The color of the tooltip. Default is 'default'.
 * @property {string} [ariaLabel] - The ARIA label for the tooltip.
 * @property {string} [className] - Additional CSS class for the tooltip.
 */

export interface TooltipProps {
  title: React.ReactNode;
  children?: React.ReactNode;
  placement?: Placement;
  offsetTooltip?: number;
  color?: Color;
  ariaLabel?: string;
  className?: string;
  shouldShowTooltip?: boolean;
  tooltipDelay: UseHoverProps['delay'];
}
