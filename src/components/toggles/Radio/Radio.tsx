import { forwardRef } from 'react';
import cn from 'classnames';

import { prefix } from '../../../prefix';
import { RadioProps } from './types';

const compPrefix = `${prefix}-radio`;

export const Radio = forwardRef<HTMLLabelElement, RadioProps>(
  (
    {
      className,
      label,
      disabled,
      checked,
      inputRef,
      inputProps,
      labelClassName,
      RadioButtonClassName,
      onChange,
      ...otherProps
    },
    ref
  ): JSX.Element => {
    return (
      <label ref={ref} className={cn(`${compPrefix}-wrapper`, className)} {...otherProps}>
        <input
          ref={inputRef}
          type="radio"
          checked={checked}
          disabled={disabled}
          className={cn(`${compPrefix}-input`, {
            [`checked-disabled`]: disabled && checked,
          })}
          onChange={onChange}
          {...inputProps}
        />
        <div
          className={cn(compPrefix, RadioButtonClassName, {
            [`${compPrefix}--checked`]: checked,
          })}
        ></div>
        {label && (
          <span className={cn(`${compPrefix}-label`, labelClassName)}>{label}</span>
        )}
      </label>
    );
  }
);

Radio.displayName = 'Radio';

Radio.defaultProps = {
  checked: false,
};
