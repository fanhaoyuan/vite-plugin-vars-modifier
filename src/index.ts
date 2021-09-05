import { ModifierOptions, UserOptions } from './interfaces';
import { PluginOption, UserConfig } from 'vite';
import merge from 'lodash.merge';
import * as pathResolver from './paths';
import cpv, { Variables } from 'css-preprocessor-variables';
import * as fs from 'fs';

export * from './interfaces';

const defaultOptions: ModifierOptions = {
    strip: true,
    paths: [],
    type: null,
};

export default (options: UserOptions): PluginOption => ({
    name: 'vite-plugin-vars-modifier',
    config: async (cfg): Promise<UserConfig> => {
        const mergedOptions = Object.assign({}, defaultOptions, options ?? {});

        if (!mergedOptions.type) {
            throw new Error('vite-plugin-vars-modifier: type is not defined.');
        }

        const { paths, type, strip } = mergedOptions;

        const resolvedPaths = await pathResolver.resolve(paths, type);

        const config: Record<string, any> = {
            [type]: {},
        };

        const vars: Variables = {};

        for await (const path of resolvedPaths) {
            const { variables } = await cpv(fs.readFileSync(path, 'utf-8'), {
                type,
                transform: true,
                strip,
            });

            Object.assign(vars, variables);
        }

        switch (type) {
            case 'less':
                config[type].modifyVars = vars;
                break;
            case 'scss':
                config[type].additionalData = vars;
                break;
            //no default
        }

        return {
            css: {
                preprocessorOptions: merge(config, cfg.css?.preprocessorOptions ?? {}),
            },
        };
    },
});
