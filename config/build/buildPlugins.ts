import HtmlWebpackPlugin from "html-webpack-plugin";
import  webpack  from "webpack";
import { BuildOptions } from "./types/config";

export function buildPlagins({paths}:BuildOptions): webpack.WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({
            template: paths.html
        }),
        new webpack.ProgressPlugin(),
    ]
}