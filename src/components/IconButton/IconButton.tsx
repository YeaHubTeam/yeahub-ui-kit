import React, { forwardRef, memo } from 'react';
import classnames from 'classnames';

import { ButtonProps } from './types';
import { prefix } from '../../prefix';

const compPrefix = `${prefix}-icon-button`;
const themePrefix = `${prefix}-button`;

export const IconButton = memo(
  forwardRef<HTMLButtonElement, ButtonProps>(
    (
      {
        theme = 'primary',
        size = 'medium',
        form = 'square',
        isActive,
        className,
        icon,
        type = 'button',
        disabled,
        ...otherProps
      },
      ref
    ): JSX.Element => {
      return (
        <button
          ref={ref}
          className={classnames(
            `${compPrefix} ${form} ${size}`,
            `${themePrefix}-${[theme]} `,
            className,
            {
              [`is-active`]: isActive,
            }
          )}
          disabled={disabled}
          aria-disabled={disabled}
          type={type}
          {...otherProps}
        >
          {icon}
        </button>
      );
    }
  )
);
