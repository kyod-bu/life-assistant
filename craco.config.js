/**
 * craco.config.js 用于修改默认配置
 * 利用了 less-loader 的 modifyVars 来进行主题配置
 */
const CracoLessPlugin = require('craco-less');

module.exports = {
    babel: { // 用来支持装饰器
        plugins: [
            ["@babel/plugin-proposal-decorators", { legacy: true }]
        ]
    },
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        // 自定义 antd 主题
                        modifyVars: { '@primary-color': '#1DA57A' },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};
