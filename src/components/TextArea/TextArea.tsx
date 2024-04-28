import React, { forwardRef } from 'react';
import classnames from 'classnames';

import { TextAreaProps } from './types';
import { prefix } from '../../prefix';

const compPrefix = `${prefix}-textarea`;

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    { className, state = 'default', isReadonly, disabled, ...otherProps },
    ref
  ): JSX.Element => {
    return (
      <textarea
        ref={ref}
        className={classnames(compPrefix, className, {
          [`${compPrefix}-error`]: state === 'error',
          [`${compPrefix}-valid`]: state === 'valid',
          [`${compPrefix}-disabled`]: isReadonly || disabled,
        })}
        disabled={isReadonly || disabled}
        {...otherProps}
      />
    );
  }
);

TextArea.displayName = 'TextArea';
