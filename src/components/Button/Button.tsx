import classnames from 'classnames';
import React, { forwardRef, memo } from 'react';

import { ButtonTypes } from './types';
import { prefix } from '../../prefix';

const compPrefix = `${prefix}-button`;

export const Button = memo(
  forwardRef<HTMLButtonElement, ButtonTypes>(
    (
      {
        theme = 'primary',
        value,
        textClassName,
        isActive,
        className,
        iconLeft: IconLeft,
        iconRight: IconRight,
        iconClassName,
        badge,
        disabled,
        ...otherProps
      },
      ref
    ): JSX.Element => {
      return (
        <button
          ref={ref}
          disabled={disabled}
          className={classnames(`${compPrefix}`, `${compPrefix}-${[theme]}`, className, {
            [`${compPrefix}-is-active`]: isActive,
          })}
          tabIndex={1}
          type="button"
          {...otherProps}
        >
          {IconLeft && <IconLeft className={iconClassName} />}
          {value && <span className={textClassName}>{value}</span>}
          {IconRight && <IconRight className={iconClassName} />}
          {(badge || badge === 0) && <div className={`${compPrefix}-badge`}>{badge}</div>}
        </button>
      );
    }
  )
);
