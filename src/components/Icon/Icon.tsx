import { prefix } from '../../prefix';
import { FC } from 'react';
import { IconProps } from './types';
import { icons } from './common';
import cn from 'classnames';

const compPrefix = `${prefix}-icon`;

export const Icon: FC<IconProps> = ({
  icon,
  size = 32,
  color = '--palette-ui-black-900',
  className,
  arg = false,
  onClick,
  ...props
}) => {
  const SVG = icons[icon](arg);
  const svgColor = `var(${color})`;

  return (
    <SVG
      {...props}
      className={cn(compPrefix, className, {
        [`${compPrefix}_clickable`]: Boolean(onClick),
      })}
      color={svgColor}
      width={size}
      height={size}
      viewBox={`0 0 32 32`}
      preserveAspectRatio="xMidYMid meet"
      onClick={onClick}
      key={icon}
    />
  );
};

Icon.displayName = 'Icon';
