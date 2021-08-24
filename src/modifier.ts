import { ModifierOptions } from './interfaces';
import { parse } from './parser';
import { resolve } from './paths';

export const modifier = async (options: ModifierOptions) => {
    const { paths, type } = options;

    const resolvedPaths = await resolve(paths, type);

    const variables = parse(resolvedPaths, options);

    const config: Record<string, any> = {
        [type]: {},
    };

    switch (type) {
        case 'less':
            config[type].modifyVars = variables;
            break;
        //no default
    }

    return config;
};
