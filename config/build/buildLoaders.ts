import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BuildOptions } from './types/config';
export function buildLoaders (options: BuildOptions): webpack.RuleSetRule[] {
    
    const cssLoader =  {
        test: /\.s[ac]ss$/i,
        use: [
         options.isDev?'style-loader': MiniCssExtractPlugin.loader,
          {
            loader:"css-loader",
            options:{
              modules:true
            }
          },
          "sass-loader",
        ],
      }

    const typeScriptLoader = {
         // Прописывае loaders для разных типов файлов
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    }
    

    return [
        typeScriptLoader,
        cssLoader
    ]
}

