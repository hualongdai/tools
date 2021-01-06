module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/tools/'
        : '/',
    pages: {
        'wechat-mini-program-sourcemap': {
            entry: 'src/pages/wechat-mini-program-sourcemap/index.js',
            template: 'public/index.html',
            filename: 'wechat-mini-program-sourcemap.html',
            title: '微信小程序 Source Map 解析服务',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ['chunk-vendors', 'chunk-common', 'wechat-mini-program-sourcemap'],
        },
    },
};
