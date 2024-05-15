export interface ChipProps extends React.ComponentPropsWithRef<'div'> {
  theme: 'primary' | 'outlined';
  label?: string;
  onDelete?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  square?: boolean;
  active?: boolean;
  preffix?: React.ReactNode;
}
