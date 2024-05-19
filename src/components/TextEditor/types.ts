import type { EditorConfig, Editor } from '@ckeditor/ckeditor5-core';

export interface EditorProps {
  isInline?: boolean;
  id: string | number;
  data: string;
  disabled?: boolean;
  autofocus?: boolean;
  onChange?: (data: string) => void;
  config?: EditorConfig;
  entryId?: number;
  onReady?: (editor: Editor) => void;
  onBlur?: (data: string) => void;
  onFocus?: (data: string) => void;
  className?: string;
}
