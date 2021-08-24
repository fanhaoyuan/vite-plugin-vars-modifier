import { resolveConfig } from 'vite';
import varsModifier from '../src';

test('no options', async () => {
    let err;

    try {
        const buildConfig = await resolveConfig(
            {
                plugins: [varsModifier()],
            },
            'build'
        );

        console.log(buildConfig);
    } catch (error) {
        err = error;
    }

    expect(err.message).toStrictEqual('vite-plugin-vars-modifier: type is not defined.');
});
