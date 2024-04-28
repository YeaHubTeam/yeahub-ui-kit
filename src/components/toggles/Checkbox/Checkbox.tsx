import { FC } from 'react';

import { prefix } from '../../../prefix';
import { CheckboxProps } from './types';
import Check from '../../../assets/icons/check.svg';
import cn from 'classnames';
const compPrefix = `${prefix}-checkbox`;

export const Checkbox: FC<CheckboxProps> = ({
  onToggle,
  checked,
  className = '',
  disabled = false,
  label,
}) => {
  const handleToggle = () => {
    onToggle(!checked);
  };

  return (
    <label className={cn(`${compPrefix}__wrapper`)}>
      <input
        type="checkbox"
        className={`${compPrefix}_input`}
        onChange={handleToggle}
        checked={checked}
        disabled={disabled}
      />
      <span className={cn(compPrefix, className)}>
        {checked && <Check className={`${compPrefix}_icon`} />}
      </span>
      {label && <span className={`${compPrefix}_text`}>{label}</span>}
    </label>
  );
};
