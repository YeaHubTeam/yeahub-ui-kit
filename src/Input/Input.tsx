import { FC, forwardRef, memo } from 'react';
import cn from 'classnames';
import styles from './Input.module.scss';
import { InputProps } from './types';

export const Input: FC<InputProps> = memo(
  forwardRef((props, ref) => {
    const { addonAfter, addonBefore, onChange, value, ...otherProps } = props;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value);
    };

    return (
      <div className={styles.inputContainer}>
        {addonBefore && <div className={styles.addonBefore}>{addonBefore}</div>}
        <input
          className={cn(styles.input)}
          onChange={handleChange}
          value={value}
          {...otherProps}
          ref={ref}
        />
        {addonAfter && <div className={styles.addonAfter}>{addonAfter}</div>}
      </div>
    );
  })
);

Input.displayName = 'Input';
