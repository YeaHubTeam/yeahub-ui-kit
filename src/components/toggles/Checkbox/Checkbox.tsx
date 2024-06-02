import { FC, forwardRef } from 'react';

import { prefix } from '../../../prefix';
import { CheckboxProps } from './types';
import cn from 'classnames';
import { Icon } from '../../Icon/Icon';
const compPrefix = `${prefix}-checkbox`;

export const Checkbox: FC<CheckboxProps> = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    { onToggle, checked, className = '', disabled = false, label, ...otherProps },
    ref
  ) => {
    const handleToggle = () => {
      onToggle?.(!checked);
    };

    return (
      <label
        className={cn(`${compPrefix}__wrapper`)}
        role="checkbox"
        aria-checked={checked}
        aria-disabled={disabled}
      >
        <input
          type="checkbox"
          className={`${compPrefix}_input`}
          onChange={handleToggle}
          checked={checked}
          disabled={disabled}
          aria-hidden
          ref={ref}
          {...otherProps}
        />
        <span className={cn(compPrefix, className)}>
          {checked && <Icon icon="check" size={20} className={`${compPrefix}_icon`} />}
        </span>
        {label && <span className={`${compPrefix}_text`}>{label}</span>}
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';
