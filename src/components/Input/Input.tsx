import { FC, forwardRef, memo, useCallback, useRef } from 'react';
import { InputProps } from './types';
import { prefix } from '../../prefix';
import cn from 'classnames';

const compPrefix = `${prefix}-input`;

export const Input: FC<InputProps> = memo(
  forwardRef((props, ref) => {
    const { preffix, suffix, className = '', disabled = false, ...otherProps } = props;

    const inputRef = useRef<HTMLInputElement | null>(null);
    const cbRef = useCallback(
      (element: HTMLInputElement) => {
        inputRef.current = element;
        if (!ref) return;
        if (ref instanceof Function) {
          ref(element);
        } else {
          ref.current = element;
        }
      },
      [inputRef, ref]
    );

    const inputContainerClassNames = cn(`${compPrefix}-wrapper`, className, {
      [`${compPrefix}-disabled`]: disabled,
    });

    return (
      <div
        aria-hidden={disabled}
        className={inputContainerClassNames}
        onClick={() => inputRef.current?.focus()}
        aria-disabled={disabled}
      >
        {preffix && (
          <span className={`${compPrefix}-preffix`} role="img">
            {preffix}
          </span>
        )}
        <div className={`${compPrefix}-container`}>
          <input
            {...otherProps}
            className={`${compPrefix}-input`}
            disabled={disabled}
            ref={cbRef}
          />
        </div>
        {suffix && (
          <span className={`${compPrefix}-suffix`} role="img">
            {suffix}
          </span>
        )}
      </div>
    );
  })
);

Input.displayName = 'Input';
