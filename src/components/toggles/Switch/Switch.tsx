import React, { forwardRef } from 'react';
import classnames from 'classnames';

import { SwitchProps } from './types';
import { prefix } from '../../../prefix';

const compPrefix = `${prefix}-switch`;

export const Switch = forwardRef<HTMLDivElement, SwitchProps>(
  (
    {
      checked,
      disabled = false,
      onChange,
      inputRef,
      inputProps = {},
      label,
      labelClassName,
      switchClassName,
      ...otherProps
    },
    ref
  ): JSX.Element => {
    return (
      <div ref={ref} {...otherProps}>
        <label className={classnames(`${compPrefix}`, switchClassName)}>
          <input
            ref={inputRef}
            type="checkbox"
            checked={checked}
            disabled={disabled}
            className={`${compPrefix}-input`}
            onChange={onChange}
            role="switch"
            aria-checked={checked}
            {...inputProps}
          />
          <span className={`${compPrefix}-slider`} />
        </label>
        {label && (
          <span className={classnames(`${compPrefix}-label`, labelClassName)}>
            {label}
          </span>
        )}
      </div>
    );
  }
);

Switch.displayName = 'Switch';

Switch.defaultProps = {
  disabled: false,
  inputProps: {},
};
