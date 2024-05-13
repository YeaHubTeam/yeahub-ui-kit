/**
 * Props for the TextArea component.
 *
 * @property {boolean} [isReadonly] - Indicates whether the textarea is readonly.
 * @property {'default' | 'error' | 'valid'} [state] - The state of the textarea. Can be 'default', 'error', or 'valid'.
 * @property {React.ComponentPropsWithoutRef<'textarea'>} [props] - Additional props for the textarea element.
 */

export interface TextAreaProps extends React.ComponentPropsWithoutRef<'textarea'> {
  isReadonly?: boolean;
  state?: 'default' | 'error' | 'valid';
}
