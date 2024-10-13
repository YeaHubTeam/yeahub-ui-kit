import classnames from 'classnames';
import React, { forwardRef } from 'react';

import { prefix } from '../../prefix';
import { ButtonProps } from './types';

const compPrefix = `${prefix}-button`;
const defaultTag = 'button';

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      theme = 'primary',
      size = 'medium',
      children,
      textClassName,
      isActive,
      className = '',
      preffix,
      suffix,
      badge,
      fullWidth = false,
      type = 'button',
      tagName = defaultTag,
      disabled,
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
          ` ${compPrefix}-${[theme]}`,
          {
            [`is-active`]: isActive,
            [`${compPrefix}-full`]: fullWidth,
            [`${compPrefix}-${[size]}`]: !fullWidth,
          },
          className
        )}
        disabled={disabled}
        aria-disabled={disabled}
        type={type}
        {...otherProps}
      >
        {preffix}
        {children && <span className={textClassName}>{children}</span>}
        {suffix}
        {(badge || badge === 0) && <div className={`${compPrefix}-badge`}>{badge}</div>}
      </Component>
    );
  }
);
Button.displayName = 'Button';
