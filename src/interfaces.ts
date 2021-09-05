/**Typeof parser of modifier */
export type ParserType = 'less';

export interface ModifierOptions {
    /**
     * paths for content to pass to parser.
     *
     * support glob format
     *
     * @see https://github.com/mrmlnc/fast-glob#readme
     */
    paths: string | string[];

    /**
     * Whether to remove the prefix
     *
     * @default true
     */
    strip: boolean;

    /**
     * Typeof parser of modifier
     */
    type: ParserType;
}

export type UserOptions = Partial<ModifierOptions> & Pick<ModifierOptions, 'paths' | 'type'>;
