import { resolveConfig } from 'vite';
import vitePluginVarsModifier from '../src';

test('no options', async () => {
    let err;

    try {
        await resolveConfig(
            {
                //@ts-ignore
                plugins: [vitePluginVarsModifier()],
            },
            'build'
        );
    } catch (error) {
        err = error;
    }

    expect(err.message).toStrictEqual('vite-plugin-vars-modifier: type is not defined.');
});
