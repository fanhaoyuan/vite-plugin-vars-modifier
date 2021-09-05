import isString from 'lodash.isstring';
import concat from 'lodash.concat';
import glob from 'fast-glob';
import { ParserType } from './interfaces';

const extensions: Record<ParserType, string[]> = {
    less: ['less'],
    scss: ['scss'],
};

/**
 * Normalize window and unix path
 * @param path path to normalize
 */
const normalize = (path: string) => path.replace(/\\/g, '/');

/**
 * Filtering invalid path of `ParserType`
 * @param paths paths to filter
 * @param type parser type
 * @returns
 * New array of paths
 */
const filter = (paths: string[], type: ParserType) => {
    return concat(
        [],
        ...extensions[type].map(extension => {
            const pattern = new RegExp(`.*\\.${extension}$`);

            return paths.filter(path => path.match(pattern));
        })
    );
};

export const resolve = async (paths: string | string[], type: ParserType) => {
    const _paths = isString(paths) ? [paths] : paths;

    const normalizedPaths = _paths.map(normalize);

    const resolvedPaths = await glob(normalizedPaths, { onlyFiles: true });

    return filter(resolvedPaths, type);
};
