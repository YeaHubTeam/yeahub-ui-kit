const path = require('path');
const { styles } = require('@ckeditor/ckeditor5-dev-utils');
const { CKEditorTranslationsPlugin } = require('@ckeditor/ckeditor5-dev-translations');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  performance: { hints: false },
  entry: path.resolve(__dirname, 'src', 'ckeditor.ts'),
  output: {
    // The name under which the editor will be exported.
    library: 'CKEDITOR5',
    path: path.resolve(__dirname, 'build'),
    filename: 'ckeditor.js',
    libraryTarget: 'umd',
    libraryExport: 'default',
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false,
          },
        },
        extractComments: false,
      }),
    ],
  },
  plugins: [
    new CKEditorTranslationsPlugin({
      // UI language. Language codes follow the https://en.wikipedia.org/wiki/ISO_639-1 format.
      // When changing the built-in language, remember to also change it in the editor's configuration (src/ckeditor.ts).
      language: 'ru',
      additionalLanguages: 'all',
    }),
  ],
  resolve: {
    extensions: ['.ts', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: ['raw-loader'],
      },
      {
        test: /\.ts$/,
        use: 'ts-loader',
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              // Inject styles as a single <style data-cke="true">
              injectType: 'singletonStyleTag',
              attributes: {
                'data-cke': true,
              },
            },
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: styles.getPostCssConfig({
                themeImporter: {
                  themePath: require.resolve('@ckeditor/ckeditor5-theme-lark'),
                },
                minify: true,
              }),
            },
          },
        ],
      },
    ],
  },
};
