# vite-plugin-vars-modifier

一个从 css 预处理器文件转换变量的插件。

---

[English](./README.md) | 中文

## 用法

### 安装

```bash
$> npm install vite-plugin-vars-modifier -D
#or
$> yarn add vite-plugin-vars-modifier -D
```

### 使用

在`vite.config.js`中添加如下配置项

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

## 配置项

```ts
export interface ModifierOptions {
    /**
     * 需要转换的路径
     *
     * 支持glob格式
     *
     * @see https://github.com/mrmlnc/fast-glob#readme
     */
    paths: string | string[];

    /**
     * 是否去除变量前缀
     *
     * @default true
     */
    strip: boolean;

    /**
     * 转换类型
     */
    type: 'less' | 'scss';
}
```

## 相关

-   [css-preprocessor-variables](https://github.com/fanhaoyuan/css-preprocessor-variables) -- 转换文件内容中的 css 预处理器变量为`JSON`格式.

## 许可证

[MIT](./LICENSE)
