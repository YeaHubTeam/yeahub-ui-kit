import { ComponentPropsWithoutRef } from 'react';
import { icons } from './common';

export type Icons = keyof typeof icons;
export type IconSize = 16 | 24 | 36;

export interface IconProps extends ComponentPropsWithoutRef<'div'> {
  icon: Icons;
  size?: IconSize;
  color?: string;
  arg?: boolean;
}
