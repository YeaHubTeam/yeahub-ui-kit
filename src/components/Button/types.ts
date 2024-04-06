export interface BaseProps extends React.ComponentPropsWithRef<'button'> {
  theme?: 'primary' | 'secondary' | 'outline' | 'link';
  size?: 'small' | 'medium' | 'large';
  preffix?: React.ReactNode;
  suffix?: React.ReactNode;
  isActive?: boolean;
  textClassName?: string;
  iconClassName?: string;
  badge?: string | number;
}

type ButtonTypes = BaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    tagName?: 'button';
  };

type AnchorTypes = BaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
    tagName?: 'a';
  };

type ButtonTypesWithLabelAttribute =
  | { value: string; 'aria-label'?: never }
  | { value?: never; 'aria-label': string };

export type ButtonProps = ButtonTypesWithLabelAttribute & (ButtonTypes | AnchorTypes);
