export interface Option {
  label: string;
  value: string;
}

export interface SingleSelectProps {
  type: 'default';
  value?: string;
  options: Option[];
  onChange: (value?: string) => void;
  disabled?: boolean;
  clearable?: boolean;

  className?: string;
  ariaLabel?: string;
  placeholder?: string;
}

export interface MultiSelectProps {
  type: 'multi';
  value: string[];
  options: Option[];
  onChange: (value: string[]) => void;
  disabled?: boolean;
  placeholder?: string;
  fixedHeight?: boolean;

  className?: string;
}
