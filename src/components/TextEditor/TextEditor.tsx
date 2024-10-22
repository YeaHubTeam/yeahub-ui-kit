import { CKEditor } from '@ckeditor/ckeditor5-react';
import React, { FC, useCallback, useRef, useMemo } from 'react';
import type { EventInfo } from '@ckeditor/ckeditor5-utils';
import cn from 'classnames';
import { Editor } from '@ckeditor/ckeditor5-core';

import CKE from './vendor/dist/ckeditor.js';
import { EditorProps } from './types';
import { prefix } from '../../prefix';
import { injectInlineStyles } from './helpers/style';

const compPrefix = `${prefix}-text-editor`;

export const TextEditor: FC<EditorProps> = (props) => {
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
      const dataWithInlineStyles = injectInlineStyles(editorData);
      onChange(dataWithInlineStyles);
    },
    [onChange, disabled]
  );

  const handleBlur = useCallback(
    (event: EventInfo, editor: Editor) => {
      if (!onBlur) return;

      const editorData = editor.getData();
      const dataWithInlineStyles = injectInlineStyles(editorData);
      onBlur(dataWithInlineStyles);
    },
    [onBlur]
  );

  const handleFocus = useCallback(
    (event: EventInfo, editor: Editor) => {
      if (!onFocus) return;

      const editorData = editor.getData();
      const dataWithInlineStyles = injectInlineStyles(editorData);
      onFocus(dataWithInlineStyles);
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

  // Injected inline styles should not trigger an internal additional update inside CKE engine and further onChange event.
  // If new data is the same data with additional inline styles decoration, pass original value into CKE engine.
  const normalizedData = useMemo(() => {
    const editorRawData = editorRef.current?.getData();
    return editorRawData &&
      (editorRawData.includes('<pre') || editorRawData.includes('<code')) && // Styles injection is only used for pre and code. Hence, narrow down to pre/code cases only for optimization purpose.
      data === injectInlineStyles(editorRawData)
      ? editorRawData
      : data;
  }, [data]);

  return (
    <div ref={editorContainerRef} className={cn(compPrefix, className)}>
      <CKEditor
        id={id}
        editor={isInline ? CKE.CustomBalloonEditor : CKE.CustomClassicEditor}
        data={normalizedData}
        config={config}
        disabled={disabled}
        onReady={handleReady}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
      />
    </div>
  );
};

TextEditor.displayName = 'TextEditor';
