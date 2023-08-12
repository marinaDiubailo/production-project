import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack'; //to access built-in plugins
import { BuildOptions } from './types/config';

export function buildPlugins({
	paths,
}: BuildOptions): webpack.WebpackPluginInstance[] {
	return [
		new HtmlWebpackPlugin({
			template: paths.html,
		}),
		new webpack.ProgressPlugin(),
	];
}
