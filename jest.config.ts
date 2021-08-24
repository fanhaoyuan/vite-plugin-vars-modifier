import { Config } from '@jest/types';

const config: Config.InitialOptions = {
    testEnvironment: 'node',
    testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'],
    roots: ['__tests__'],
    transformIgnorePatterns: ['/^((node_modules/lodash-es/.*).)*/ig'],
};

export default config;
