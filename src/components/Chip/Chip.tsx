import React, { forwardRef, memo } from 'react';
import cn from 'classnames';

import { ChipProps } from './types';
import { Icon } from '../Icon';
import { prefix } from '../../prefix';

const compPrefix = `${prefix}-chip`;

export const Chip = memo(
  forwardRef<HTMLDivElement, ChipProps>(
    (
      {
        theme = 'primary',
        label,
        className,
        disabled,
        active,
        preffix,
        onClick,
        onDelete,
        ...otherProps
      },
      ref
    ): JSX.Element => {
      return (
        <div
          className={cn(`${compPrefix}-wrapper`, className, {
            [`${compPrefix}-${theme}`]: theme,
            [`${compPrefix}-clickable`]: onClick,
            [`${compPrefix}-disabled`]: disabled,
            [`${compPrefix}-active`]: active,
          })}
          aria-hidden={disabled}
          aria-disabled={disabled}
          onClick={onClick}
          {...(onClick || onDelete ? { role: 'button' } : {})}
          ref={ref}
          {...otherProps}
        >
          {preffix && preffix}
          {label && <span className={`${compPrefix}-label`}>{label}</span>}
          {onDelete && (
            <Icon
              className={`${compPrefix}-delete-icon`}
              icon="xCircle"
              size={20}
              color={disabled ? '--palette-ui-black-100' : '--palette-ui-red-600'}
            />
          )}
        </div>
      );
    }
  )
);
