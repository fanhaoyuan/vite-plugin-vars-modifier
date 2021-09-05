import { resolveConfig, ResolvedConfig } from 'vite';
import { getViteConfig } from './utils';

test('default', async () => {
    const baseConfig = getViteConfig('less');

    const lessCase = (config: ResolvedConfig) => {
        const variables = config.css.preprocessorOptions.less.modifyVars;
        expect(Object.keys(variables).length).toBe(13);
        expect(variables['@primary-color']).toStrictEqual('#1890ff');
    };

    const buildConfig = await resolveConfig(baseConfig, 'build');
    lessCase(buildConfig);

    const serveConfig = await resolveConfig(baseConfig, 'serve');
    lessCase(serveConfig);
});

test('config with extra vars', async () => {
    const lessConfig = getViteConfig('less', {
        css: {
            preprocessorOptions: {
                less: {
                    modifyVars: {
                        '@primary-color': '#ffffff',
                        '@test-color': '#ffffff',
                    },
                },
            },
        },
    });

    const lessCase = (config: ResolvedConfig) => {
        const variables = config.css.preprocessorOptions.less.modifyVars;

        expect(Object.keys(variables).length).toBe(14); // merge config and primary-color is duplicated.
        expect(variables['@primary-color']).toStrictEqual('#ffffff'); // custom define is covered plugins.
    };

    const buildConfig = await resolveConfig(lessConfig, 'build');
    lessCase(buildConfig);

    const serveConfig = await resolveConfig(lessConfig, 'serve');
    lessCase(serveConfig);
});
