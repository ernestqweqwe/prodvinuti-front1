import webpack from 'webpack';
export function buildLoaders (): webpack.RuleSetRule[] {
    
    const cssLoader =  {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
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

