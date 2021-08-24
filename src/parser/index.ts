import { Parser, ParserType, ModifierOptions } from '../interfaces';
import * as fs from 'fs';
import lessParser from './less';

const getParser = (type: ParserType) => {
    let parser: Parser;

    switch (type) {
        case 'less':
            parser = lessParser;
            break;
        //no default
    }

    return parser;
};

export const parse = (paths: string[], options: ModifierOptions) => {
    const parser = getParser(options.type);

    return paths.reduce((variables: Record<string, string>, path) => {
        const content = fs.readFileSync(path, 'utf-8');

        const vars = parser(content, options);

        return Object.assign({}, variables, vars);
    }, {});
};
