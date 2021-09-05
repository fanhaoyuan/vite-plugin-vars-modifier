import * as path from 'path';
import { InlineConfig, mergeConfig, UserConfig } from 'vite';
import vitePluginVarsModifier, { ParserType } from '../src';

export const getAssetsPath = (...paths: string[]) => [path.resolve(__dirname, './assets'), ...paths].join('');

export const getViteConfig = (type: ParserType, options: UserConfig = {}): InlineConfig => {
    const baseConfig = {
        configFile: false,
        plugins: [
            vitePluginVarsModifier({
                paths: getAssetsPath('/*'),
                type,
            }),
        ],
    };

    return mergeConfig(baseConfig, options);
};
