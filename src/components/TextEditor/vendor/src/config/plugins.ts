import { Alignment } from '@ckeditor/ckeditor5-alignment';
import {
  Bold,
  Code,
  Italic,
  Underline,
  Strikethrough,
} from '@ckeditor/ckeditor5-basic-styles';
import { HorizontalLine } from '@ckeditor/ckeditor5-horizontal-line';
import { CodeBlock } from '@ckeditor/ckeditor5-code-block';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import {
  FontFamily,
  FontSize,
  FontColor,
  FontBackgroundColor,
} from '@ckeditor/ckeditor5-font';
import { Heading } from '@ckeditor/ckeditor5-heading';
import { GeneralHtmlSupport } from '@ckeditor/ckeditor5-html-support';
import { List } from '@ckeditor/ckeditor5-list';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { Undo } from '@ckeditor/ckeditor5-undo';
import { Clipboard } from '@ckeditor/ckeditor5-clipboard';
import { PasteFromOffice } from '@ckeditor/ckeditor5-paste-from-office';
import { RemoveFormat } from '@ckeditor/ckeditor5-remove-format';
import type { Editor, PluginConstructor } from '@ckeditor/ckeditor5-core';
import { Link } from '@ckeditor/ckeditor5-link';

const builtInPlugins: Array<PluginConstructor<Editor>> = [
  Alignment,
  Bold,
  Code,
  CodeBlock,
  Strikethrough,
  Essentials,
  FontFamily,
  FontSize,
  FontColor,
  FontBackgroundColor,
  GeneralHtmlSupport,
  Heading,
  Italic,
  List,
  Paragraph,
  Underline,
  Undo,
  Clipboard,
  PasteFromOffice,
  HorizontalLine,
  RemoveFormat,
  Link,
];

const customPlugins: Array<PluginConstructor<Editor>> = [];

export const plugins = [...builtInPlugins, ...customPlugins];
