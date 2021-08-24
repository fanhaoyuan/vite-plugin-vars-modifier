import { resolve } from '../../src/paths';
import { getAssetsPath } from '../utils';

const lessTestCases = (paths: string[]) => {
    expect(paths.length).toBe(2); // variables.less & variables2.less
    expect(paths[0]).toStrictEqual(getAssetsPath('/variables.less'));
    expect(paths[1]).toStrictEqual(getAssetsPath('/variables2.less'));
};

test('less array paths', async () => {
    const paths = await resolve([getAssetsPath('/variables.less'), getAssetsPath('/variables2.less')], 'less');
    lessTestCases(paths);
});

test('less string paths', async () => {
    const paths = await resolve(getAssetsPath('/*'), 'less');
    lessTestCases(paths);
});
