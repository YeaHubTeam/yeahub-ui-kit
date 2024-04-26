import { IconTheme } from '../IconButton/index';
export interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
  theme?: IconTheme;
  iconBtnTheme?: 'square' | 'round';
  size?: 'small' | 'medium' | 'large';
  preffix?: React.ReactNode;
  suffix?: React.ReactNode;
  isActive?: boolean;
  textClassName?: string;
  iconClassName?: string;
  badge?: string | number;
  tagName?: 'button' | 'a';
}
