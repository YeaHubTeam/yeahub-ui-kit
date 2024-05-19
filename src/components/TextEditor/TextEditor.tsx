import { CKEditor } from '@ckeditor/ckeditor5-react';
import React, { useCallback, useRef, memo } from 'react';
import type { EventInfo } from '@ckeditor/ckeditor5-utils';
import cn from 'classnames';
import type { Editor } from '@ckeditor/ckeditor5-core';

import CKE from './vendor/dist/ckeditor.js';
import { EditorProps } from './types';
import { prefix } from '../../prefix';

const compPrefix = `${prefix}-text-editor`;

export const TextEditor = memo((props: EditorProps) => {
  const {
    isInline,
    data,
    id,
    disabled,
    config,
    autofocus,
    className,
    onChange,
    onBlur,
    onFocus,
    onReady,
  } = props;

  const editorContainerRef = useRef<HTMLDivElement | null>(null);
  const editorRef = useRef<Editor | null>(null);

  const handleChange = useCallback(
    (event: EventInfo, editor: Editor) => {
      if (!onChange) return;

      const editorData = editor.getData();
      onChange(editorData);
    },
    [onChange, disabled]
  );

  const handleBlur = useCallback(
    (event: EventInfo, editor: Editor) => {
      if (!onBlur) return;

      const editorData = editor.getData();
      onBlur(editorData);
    },
    [onBlur]
  );

  const handleFocus = useCallback(
    (event: EventInfo, editor: Editor) => {
      if (!onFocus) return;

      const editorData = editor.getData();
      onFocus(editorData);
    },
    [onFocus]
  );

  const handleReady = useCallback(
    (editor: Editor) => {
      editorRef.current = editor;
      onReady?.(editor);

      if (autofocus) {
        // Auto-scroll to the editor
        editorContainerRef.current?.scrollIntoView({ block: 'center' });

        // Set focus at the end of content
        editor.model.change((writer) => {
          const roots = editor.model.document.getRoots();
          const lastRoot = roots[roots.length - 1];
          writer.setSelection(lastRoot, 'end');
        });

        editor.editing.view.focus();
      }
    },
    [onReady, autofocus]
  );

  return (
    <div ref={editorContainerRef} className={cn(compPrefix, className)}>
      <CKEditor
        id={id}
        editor={isInline ? CKE.CustomBalloonEditor : CKE.CustomClassicEditor}
        data={data}
        config={config}
        disabled={disabled}
        onReady={handleReady}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
      />
    </div>
  );
});

TextEditor.displayName = 'TextEditor';
