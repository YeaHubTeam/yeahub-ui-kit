import { prefix } from '../../prefix';
import { FC, memo } from 'react';
import { IconProps } from './types';
import { icons } from './common';
import cn from 'classnames';

const compPrefix = `${prefix}-icon`;

export const Icon: FC<IconProps> = memo(
  ({ icon, size = 32, color = 'black', className, arg = false }) => {
    const SVG = icons[icon](arg);
    const svgColor = `var(${color})`;
    const transformStyle = {
      transform: `scale(${size / 32})`,
      transformOrigin: 'center',
    };
    return (
      <SVG
        style={transformStyle}
        className={cn(compPrefix, className)}
        color={svgColor}
      />
    );
  }
);

Icon.displayName = 'Icon';
