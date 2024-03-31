import classnames from 'classnames';
import React, { forwardRef } from 'react';

import { LabelTypes } from './types';
import { prefix } from '../../prefix';

const compPrefix = `${prefix}-label`;

export const Label = forwardRef<HTMLLabelElement, LabelTypes>(
  (
    { className, text, content, required, children, labelClassName, ...otherProps },
    ref
  ): JSX.Element => {
    let label;
    if (content) {
      label = content;
    } else {
      label = required ? `${text} *` : text;
    }

    return (
      <label ref={ref} className={className} {...otherProps}>
        <span className={classnames(compPrefix, labelClassName)}>{label}</span>
        {children}
      </label>
    );
  }
);

Label.displayName = 'Label';

Label.defaultProps = {
  text: '',
  required: false,
};
