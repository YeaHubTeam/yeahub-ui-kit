import React from 'react';

export interface LabelTypes
  extends Omit<React.ComponentPropsWithRef<'label'>, 'content'> {
  labelClassName?: string;
  text?: string;
  content?: React.ReactNode;
  required?: boolean;
}
