import { ResolveOptions } from 'webpack';
export function buildResolvers ():ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],// расширение тех файлов которым при импорте не нужно указывать расширение
      }
}