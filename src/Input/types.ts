/**
 * @property {React.ReactNode} addonBefore - The Icon displayed before (on the left side of) the input field
 * @property {React.ReactNode} addonAfter - The Icon displayed after (on the right side of) the input field
 */

export interface InputProps
  extends Omit<React.ComponentPropsWithRef<'input'>, 'onChange' | 'value'> {
  addonBefore?: React.ReactNode;
  addonAfter?: React.ReactNode;
  onChange: (value: string) => void;
  value: string;
}

export type Ref = HTMLInputElement;
