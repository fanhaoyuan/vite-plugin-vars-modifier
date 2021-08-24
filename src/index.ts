import { ModifierOptions } from './interfaces';
import { PluginOption, UserConfig } from 'vite';
import { merge } from 'lodash-es';
import { modifier } from './modifier';

export * from './interfaces';

const defaultOptions: ModifierOptions = {
    strip: false,
    paths: [],
    type: null,
};

export default (options: Partial<ModifierOptions> & Pick<ModifierOptions, 'paths' | 'type'>): PluginOption => {
    const mergedOptions = Object.assign({}, defaultOptions, options ?? {});

    if (!mergedOptions.type) {
        throw new Error('vite-plugin-vars-modifier: type is not defined.');
    }

    return {
        name: 'vite-plugin-vars-modifier',
        config: async (config): Promise<UserConfig> => {
            return {
                css: {
                    preprocessorOptions: merge(await modifier(mergedOptions), config.css?.preprocessorOptions ?? {}),
                },
            };
        },
    };
};
