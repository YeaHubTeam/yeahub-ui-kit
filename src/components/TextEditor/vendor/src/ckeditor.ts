import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';
import { BalloonEditor } from '@ckeditor/ckeditor5-editor-balloon';
import type { EditorConfig } from '@ckeditor/ckeditor5-core';

import { plugins, toolbar, fontColor, fontSize, link } from './config/index';

class CustomClassicEditor extends ClassicEditor {}
class CustomBalloonEditor extends BalloonEditor {}

CustomClassicEditor.builtinPlugins = plugins;
CustomBalloonEditor.builtinPlugins = plugins;

const config: EditorConfig = {
  toolbar,
  fontColor,
  fontSize,
  link,
  language: 'ru',
};

CustomClassicEditor.defaultConfig = config;
CustomBalloonEditor.defaultConfig = config;

export default { CustomClassicEditor, CustomBalloonEditor };
