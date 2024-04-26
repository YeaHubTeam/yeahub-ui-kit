export const iconTheme = [
  'primary',
  'secondary',
  'outline',
  'tertiary',
  'link',
  'destructive',
  'destructive-secondary',
  'destructive-outline',
  'destructive-tertiary',
] as const;

export type IconTheme = (typeof iconTheme)[number];

export interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
  theme?: IconTheme;
  form?: 'square' | 'round';
  size?: 'small' | 'medium' | 'large';
  icon: React.ReactNode;
  isActive?: boolean;
  iconClassName?: string;
  badge?: string | number;
  'aria-label': string;
}
