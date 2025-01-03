import  path from 'path';
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'



const config: webpack.Configuration = {
  
    // entry: './src/index.js' забись равносильна снизу
    mode: 'production',
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, 'build'),
        clean: true
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,'public', 'index.html')
        }),
        new webpack.ProgressPlugin(),
    ], 
    module: {
        rules: [
            // Прописывае loaders для разных типов файлов
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
          },
        ],
      },
      resolve: {
        extensions: ['.tsx', '.ts', '.js'],// расширение тех файлов которым при импорте не нужно указывать расширение
      },

}

export default config;