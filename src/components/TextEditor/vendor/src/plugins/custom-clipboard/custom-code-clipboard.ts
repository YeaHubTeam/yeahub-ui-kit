import { Plugin } from '@ckeditor/ckeditor5-core';

export class CustomCodeClipboard extends Plugin {
  init() {
    const editor = this.editor;
    const view = this.editor.editing.view;
    const viewDocument = view.document;

    this.listenTo(viewDocument, 'clipboardInput', (event, data) => {
      if (data.content) {
        return;
      }
      const inputData = data.dataTransfer.getData('text/html');

      if (inputData) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(inputData, 'text/html');

        // find all <code> elements whose parent is a <div>
        doc.querySelectorAll('div > code').forEach((codeElement) => {
          const divElement = codeElement.parentElement;

          if (!divElement) {
            return;
          }

          // Create new <pre> element and place <code> inside
          const preElement = document.createElement('pre');
          preElement.appendChild(codeElement.cloneNode(true));

          // replace <div> with <pre>
          divElement.replaceWith(preElement);
        });

        // convert to HTML string
        const modifiedHTML = doc.body.innerHTML;

        // continue to insert new data
        data.content = editor.data.processor.toView(modifiedHTML);
      }
    });
  }
}
