import React, { InputHTMLAttributes } from 'react';

/**
 * Props for the Switch component.
 *
 * @property {boolean} checked - Indicates whether the switch is checked.
 * @property {boolean} [disabled] - Indicates whether the switch is disabled.
 * @property {function} onChange - Function triggered when the switch state changes. It receives a React change event.
 * @property {React.RefObject<HTMLInputElement>} [inputRef] - Reference to the input element of the switch.
 * @property {React.InputHTMLAttributes<HTMLInputElement>} [inputProps] - Additional input properties for the switch.
 * @property {string} [label] - The label text for the switch.
 * @property {string} [labelClassName] - Additional CSS class for the label of the switch.
 * @property {string} [switchClassName] - Additional CSS class for the switch.
 */

export interface SwitchProps
  extends Omit<React.ComponentPropsWithoutRef<'div'>, 'onChange'> {
  checked: boolean;
  disabled?: boolean;
  onChange: (e: React.ChangeEvent) => void;
  inputRef?: React.RefObject<HTMLInputElement>;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  label?: string;
  labelClassName?: string;
  switchClassName?: string;
}
