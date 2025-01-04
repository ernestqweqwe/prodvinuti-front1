import webpack from 'webpack';
export function buildLoaders (): webpack.RuleSetRule[] {
    
    const typeScriptLoader = {
         // Прописывае loaders для разных типов файлов
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    }
    

    return [
        typeScriptLoader
    ]
}

