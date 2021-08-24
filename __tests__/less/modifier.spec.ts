import { modifier } from '../../src/modifier';
import { getAssetsPath } from '../utils';

test('less modifier', async () => {
    const config = await modifier({
        paths: [getAssetsPath('/*')],
        strip: true,
        type: 'less',
    });

    const variables = config.less.modifyVars;

    expect(Object.keys(variables).length).toBe(13); // variables.less variables2.less
});
