import path from 'path';
import webpack from 'webpack';
import { buildWebpack } from './config/build/buildWebpack';
import { BuildMode, BuildPaths, BuildPlatform } from './config/build/types/types';

interface EnvVariables {
  mode?: BuildMode;
}

export default (env: EnvVariables) => {
  const paths: BuildPaths = {
    output: path.resolve(__dirname, 'build'),
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    src: path.resolve(__dirname, 'src')
  };

  const config: webpack.Configuration = buildWebpack({
    mode: env.mode ?? 'development',
    paths
  });

  return config;
};
