import { ComponentPropsWithoutRef } from 'react';
import { IconsName } from './common';
import { CSSPropertiesWithVars } from '../types';

export type IconSize = 20 | 24 | 32;

export interface IconProps extends ComponentPropsWithoutRef<'div'> {
  icon: IconsName;
  size?: IconSize;
  color?: CSSPropertiesWithVars;
  className?: string;
  arg?: boolean;
}
