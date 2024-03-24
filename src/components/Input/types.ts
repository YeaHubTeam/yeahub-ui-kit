/**
 * @property {React.ReactNode} preffix - The Icon displayed before (on the left side of) the input field
 * @property {React.ReactNode} suffix - The Icon displayed after (on the right side of) the input field
 */

export interface InputProps extends React.ComponentPropsWithRef<'input'> {
  preffix?: React.ReactNode;
  suffix?: React.ReactNode;
  disabled?: boolean;
  label?: string;
  ariaLabel?: string;
  className?: string;
}

export type Ref = HTMLInputElement;
