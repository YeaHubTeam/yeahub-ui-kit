import React from 'react';

export interface ButtonTypes extends React.ComponentPropsWithRef<'button'> {
  theme?: 'primary' | 'secondary' | 'destructive';
  iconLeft?: React.ElementType;
  iconRight?: React.ElementType;
  isActive?: boolean;
  textClassName?: string;
  iconClassName?: string;
  badge?: string | number;
}
