import classnames from 'classnames';
import React, { forwardRef, memo } from 'react';

import { ButtonProps } from './types';
import { prefix } from '../../prefix';

const compPrefix = `${prefix}-button`;
const defaultTag = 'button';

export const Button = memo(
  forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
    (
      {
        theme = 'primary',
        size = 'medium',
        value,
        textClassName,
        isActive,
        className,
        preffix,
        suffix,
        badge,
        type = 'button',
        tagName = defaultTag,
        disabled,
        'aria-label': ariaLabel,
        ...otherProps
      },
      ref
    ): JSX.Element => {
      const Component = tagName as React.ElementType;

      return (
        <Component
          ref={ref}
          className={classnames(
            `${compPrefix}`,
            ` ${compPrefix}-${[theme]} ${compPrefix}-${[size]}`,
            className,
            {
              [`is-active`]: isActive,
              [`is-square`]: !value,
            }
          )}
          disabled={disabled}
          aria-disabled={disabled}
          type={type}
          {...(!value ? { 'aria-label': ariaLabel } : {})}
          {...otherProps}
        >
          {preffix}
          {value && <span className={textClassName}>{value}</span>}
          {suffix}
          {(badge || badge === 0) && <div className={`${compPrefix}-badge`}>{badge}</div>}
        </Component>
      );
    }
  )
);
