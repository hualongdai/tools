module.exports = {
    pages: {
        'wechat-mini-program-sourcemap': {
            entry: 'src/pages/wechat-mini-program-sourcemap/index.js',
            template: 'public/index.html',
            filename: 'index.html',
            title: '微信小程序 Source Map 解析服务',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ['chunk-vendors', 'chunk-common', 'wechat-mini-program-sourcemap'],
        },
    // 当使用只有入口的字符串格式时，
    // 模板会被推导为 `public/subpage.html`
    // 并且如果找不到的话，就回退到 `public/index.html`。
    // 输出文件名会被推导为 `subpage.html`。
    // subpage: 'src/subpage/main.js',
    },
};
