import webpack, {Configuration, DefinePlugin} from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/types";
import {BundleAnalyzerPlugin} from "webpack-bundle-analyzer";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import path from "path";
import CopyPlugin from "copy-webpack-plugin";

export function buildPlugins({mode, paths, analyzer, platform}: BuildOptions): Configuration['plugins'] {
    const isDev = mode === 'development';
    const isProd = mode === 'production';

    const plugins: Configuration['plugins'] = [
        new HtmlWebpackPlugin({ template: paths.html, favicon: path.resolve(paths.public, 'favicon.ico') }),
        new DefinePlugin({
            __PLATFORM__: JSON.stringify(platform),
            __ENV__: JSON.stringify(mode),
        }),

    ]

    if(isDev) {
        plugins.push(new webpack.ProgressPlugin())
        plugins.push(new ForkTsCheckerWebpackPlugin())
    }

    if(isProd) {
        plugins.push(new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }))
        // когда нужно будет делать сборку добавить пути для копии ассетов в билд
        // plugins.push(new CopyPlugin({
        //     patterns: [
        //         { from: path.resolve(paths.src, 'assets'), to: path.resolve(paths.output, 'assets') },
        //     ],
        // }),)
    }

    if(analyzer) {
        plugins.push(new BundleAnalyzerPlugin())
    }

    return plugins;
}