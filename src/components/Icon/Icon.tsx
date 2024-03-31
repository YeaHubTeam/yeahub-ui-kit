import { prefix } from '../../prefix';
import { FC, memo } from 'react';
import { IconProps } from './types';
import { icons } from './common';
import cn from 'classnames';

const compPrefix = `${prefix}-icon`;

export const Icon: FC<IconProps> = memo(
  ({ icon, size = 24, color = 'black', arg = false, ...props }) => {
    const SVG = icons[icon](arg);

    const classNames = cn(compPrefix, {
      [`${compPrefix}-loading`]: icon === 'loading',
    });

    const svgColor = `var(--${color})`;

    return (
      <div className={classNames} {...props}>
        <SVG
          width={size}
          color={svgColor}
          height={size}
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
        />
      </div>
    );
  }
);

Icon.displayName = 'Icon';
