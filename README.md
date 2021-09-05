# vite-plugin-vars-modifier

A Plugins for convert variables from css preprocessor file.

---

English | [中文](./README_CN.md)

## Usage

### Install

```bash
$> npm install vite-plugin-vars-modifier -D
#or
$> yarn add vite-plugin-vars-modifier -D
```

### Use

Add following options in `vite.config.js`

```ts
import modifier from 'vite-plugin-vars-modifier';

export default {
    plugins: [
        modifier({
            paths: ['path/to/file'],
            type: 'less',
        }),
    ],
};
```

## Options

```ts
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
    type: 'less' | 'scss';
}
```

## relation

-   [css-preprocessor-variables](https://github.com/fanhaoyuan/css-preprocessor-variables) -- Convert variables content to json.

## License

[MIT](./LICENSE)
