import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';
import { BalloonEditor } from '@ckeditor/ckeditor5-editor-balloon';
declare class CustomClassicEditor extends ClassicEditor {}
declare class CustomBalloonEditor extends BalloonEditor {}
declare const _default: {
  CustomClassicEditor: typeof CustomClassicEditor;
  CustomBalloonEditor: typeof CustomBalloonEditor;
};
export default _default;
