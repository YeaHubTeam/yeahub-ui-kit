/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, forwardRef, memo, useMemo } from 'react';
import cn from 'classnames';
import { InputProps } from './types';
import { prefix } from '../../prefix';

const compPrefix = `${prefix}-input`;

export const Input: FC<InputProps> = memo(
  forwardRef((props, ref) => {
    const {
      preffix,
      suffix,
      className = '',
      label,
      placeholder,
      ariaLabel,
      disabled,
      ...otherProps
    } = props;

    const inputId = useMemo(
      () => `${compPrefix}-input-${Math.random().toString(36).substring(7)}`,
      []
    );
    const labelId = useMemo(
      () => `${compPrefix}-label-${Math.random().toString(36).substring(7)}`,
      []
    );

    return (
      <div className={`${compPrefix}-wrapper ${className}`}>
        {label && (
          <label id={labelId} htmlFor={inputId} className={`${compPrefix}-label`}>
            {props.label}
          </label>
        )}
        <div className={`${compPrefix}-box ${disabled ? `${prefix}-disabled` : ''}`}>
          {preffix && <span className={`${compPrefix}-preffix`}>{preffix}</span>}
          <input
            {...otherProps}
            aria-labelledby={labelId}
            aria-label={ariaLabel}
            type="text"
            className={`${compPrefix}-input`}
            ref={ref}
          />
          {suffix && <span className={`${compPrefix}-suffix`}>{suffix}</span>}
        </div>
      </div>
    );
  })
);

Input.displayName = 'Input';
