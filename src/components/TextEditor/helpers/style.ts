import juice from 'juice';

// Problem: data created by CKEditor has no styles if the data is displayed outside of applications. E.g. articles
// The only way to solve it is to inject inline styles manually according to the existing CSS.
// https://github.com/ckeditor/ckeditor5/issues/1627#issuecomment-703199391
// until CKE5 team is not released officially as available API.

// Inline styles are adapted to data downcast pipeline! They are not matched to editing downcast styles! If you change
// something below, make sure you understand the crucial difference between data and editing downcast pipelines.

const styles = `
    code {
        border-radius: 12px;
        padding: 5px;
        background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);
    }

    pre {
        border-radius: 12px;
        border: 1px solid #FDF4FF;
        background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);
    }

    pre code {
        border: none;
        padding: 0;
        background: none;
    }
`;

// Inject styles as inline to be able to display data outside our web application.
// E.g. questions should have all styles as inline to reproduce the same look as the content is displayed
// during editing in CKEditor.
export const injectInlineStyles = (html: string) => juice.inlineContent(html, styles);
