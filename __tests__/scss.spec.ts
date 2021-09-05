import { resolveConfig, ResolvedConfig } from 'vite';
import { getViteConfig } from './utils';

test('default', async () => {
    const baseConfig = getViteConfig('scss');

    const scssCase = (config: ResolvedConfig) => {
        const variables = config.css.preprocessorOptions.scss.additionalData;

        console.log(variables);

        expect(Object.keys(variables).length).toBe(13);
        expect(variables['$primary-color']).toStrictEqual('#1890ff');
    };

    const buildConfig = await resolveConfig(baseConfig, 'build');
    scssCase(buildConfig);

    const serveConfig = await resolveConfig(baseConfig, 'serve');
    scssCase(serveConfig);
});

test('config with extra vars', async () => {
    const scssConfig = getViteConfig('scss', {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: {
                        '$primary-color': '#ffffff',
                        '$test-color': '#ffffff',
                    },
                },
            },
        },
    });

    const scssCase = (config: ResolvedConfig) => {
        const variables = config.css.preprocessorOptions.scss.additionalData;

        expect(Object.keys(variables).length).toBe(14); // merge config and primary-color is duplicated.
        expect(variables['$primary-color']).toStrictEqual('#ffffff'); // custom define is covered plugins.
    };

    const buildConfig = await resolveConfig(scssConfig, 'build');
    scssCase(buildConfig);

    const serveConfig = await resolveConfig(scssConfig, 'serve');
    scssCase(serveConfig);
});
