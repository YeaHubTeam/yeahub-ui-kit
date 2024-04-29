import React from 'react';

export interface FormControlTypes extends React.ComponentPropsWithoutRef<'label'> {
  label?: React.ReactNode;
  error?: string;
}
