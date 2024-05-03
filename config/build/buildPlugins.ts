import webpack, { Configuration } from 'webpack';
import { BuildOptions } from './types/types';
import CopyPlugin from 'copy-webpack-plugin';
import path from 'path';

export function buildPlugins({ mode, paths }: BuildOptions): Configuration['plugins'] {
  const isDev = mode === 'development';
  const isProd = mode === 'production';

  const plugins: Configuration['plugins'] = [];

  if (isDev) {
    plugins.push(new webpack.ProgressPlugin());
  }

  if (isProd) {
    // когда нужно будет делать сборку добавить пути для копии ассетов в билд
    plugins.push(new CopyPlugin({
        patterns: [
            { from: path.resolve(paths.src, 'assets'), to: path.resolve(paths.output, 'assets') },
        ],
    }),)
  }

  return plugins;
}
