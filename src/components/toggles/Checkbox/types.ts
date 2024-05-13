/**
 * Props for the Checkbox component.
 *
 * @property {boolean} [disabled] - Indicates whether the checkbox is disabled.
 * @property {function} onToggle - Function triggered when the checkbox is toggled. It receives a boolean parameter indicating the new state.
 * @property {string} [className] - Additional CSS class for the checkbox.
 * @property {string} [label] - The label text for the checkbox.
 * @property {boolean} [checked] - Indicates whether the checkbox is checked.
 */

export interface CheckboxProps {
  disabled?: boolean;
  onToggle: (isChecked: boolean) => void;
  className?: string;
  label?: string;
  checked?: boolean;
}
