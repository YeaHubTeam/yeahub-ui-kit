export type HeaderTagType = 'h1' | 'h2' | 'h3';
export type TextSize = 'size_s' | 'size_m' | 'size_l';

export interface TextTypes {
  className?: string;
  title?: string;
  text?: string;
  theme?: 'primary' | 'error' | 'warning';
  align?: 'left' | 'center' | 'right';
  size?: TextSize;
}
