export interface CheckboxProps {
  disabled?: boolean;
  onToggle: (isChecked: boolean) => void;
  className?: string;
  label?: string;
  checked?: boolean;
}
