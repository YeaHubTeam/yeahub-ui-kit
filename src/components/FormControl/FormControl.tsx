import React, { HTMLProps, memo } from 'react';

import { Text } from '../Text';
import { Label } from '../Label';

import { FormControlTypes } from './types';
import { prefix } from '../../prefix';

const compPrefix = `${prefix}-form-control`;

export const FormControl = memo(
  ({ children, label, error, className, ...otherProps }: FormControlTypes) => {
    const content = (
      <>
        {children}
        {error ? <Text theme="error" text={error} /> : null}
      </>
    );

    if (label) {
      return (
        <Label
          content={label}
          labelClassName={compPrefix}
          className={className}
          {...otherProps}
        >
          {content}
        </Label>
      );
    } else {
      return (
        <div
          className={className}
          {...(otherProps as unknown as HTMLProps<HTMLDivElement>)}
        >
          {content}
        </div>
      );
    }
  }
);

FormControl.displayName = 'FormControl';
