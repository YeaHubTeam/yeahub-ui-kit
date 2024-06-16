export interface ChipProps extends React.ComponentPropsWithRef<'div'> {
  theme: 'primary' | 'outlined';
  label?: string;
  onDelete?: () => void;
  disabled?: boolean;
  square?: boolean;
  active?: boolean;
  preffix?: React.ReactNode;
}
