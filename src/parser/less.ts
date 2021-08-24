import { getLessVariables } from 'less-json-vars';
import { Parser } from '../interfaces';

const parser: Parser = (content, options) => {
    return getLessVariables(content, {
        strip: options.strip,
        transform: true,
    });
};

export default parser;
