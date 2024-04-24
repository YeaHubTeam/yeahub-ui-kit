export interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
  theme?:
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'tertiary'
    | 'link'
    | 'destructive'
    | 'destructive-secondary'
    | 'destructive-outline'
    | 'destructive-tertiary';
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
