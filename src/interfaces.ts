/**Typeof parser of modifier */
type ParserType = 'less';

export interface ModifierOptions {
    /**
     * paths for content to pass to parser.
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
