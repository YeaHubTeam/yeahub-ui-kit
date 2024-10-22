import { Plugin } from '@ckeditor/ckeditor5-core';
import { CustomCodeClipboard } from './custom-code-clipboard';

export class CustomClipboard extends Plugin {
  static get pluginName() {
    return 'CustomClipboard';
  }

  static get requires() {
    return [CustomCodeClipboard];
  }
}
