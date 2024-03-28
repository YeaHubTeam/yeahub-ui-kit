import { FC, forwardRef, memo, useCallback, useRef } from 'react';
import { InputProps } from './types';
import { prefix } from '../../prefix';

const compPrefix = `${prefix}-input`;

export const Input: FC<InputProps> = memo(
  forwardRef((props, ref) => {
    const { preffix, suffix, className = '', disabled, ...otherProps } = props;

    const inputRef = useRef<HTMLInputElement | null>(null);
    const cbRef = useCallback(
      (element: HTMLInputElement) => {
        inputRef.current = element;
        if (!ref) return;
        if (ref instanceof Function) {
          ref(element);
        } else if (ref) {
          ref.current = element;
        }
      },
      [inputRef, ref]
    );

    return (
      <div
        aria-hidden
        className={`${compPrefix}-wrapper ${className}`}
        onClick={() => inputRef.current?.focus()}
        aria-disabled={disabled}
      >
        {preffix && <span className={`${compPrefix}-preffix`}>{preffix}</span>}
        <div className={`${compPrefix}-container`}>
          <input
            {...otherProps}
            className={`${compPrefix}-input`}
            disabled={disabled}
            ref={cbRef}
          />
        </div>
        {suffix && <span className={`${compPrefix}-suffix`}>{suffix}</span>}
      </div>
    );
  })
);

Input.displayName = 'Input';
