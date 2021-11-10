const path = require('path');
const { getPlugin, pluginByName } = require('@craco/craco/lib/webpack-plugins');
const { cdn, plugins, externals, alias } = require('./craco.common');

module.exports = {
    plugins,
    externals,
    webpack: {
        alias,
        configure: (webpackConfig) => {
            const newConf = webpackConfig;
            newConf.externals = externals;
            newConf.entry = path.resolve(__dirname, 'src/demo/index.jsx');

            const { match: htmlWebpackPlugin } = getPlugin(webpackConfig, pluginByName('HtmlWebpackPlugin'));
            htmlWebpackPlugin.options.cdnJsArr = cdn.js;
            htmlWebpackPlugin.options.cdnCssArr = cdn.css;

            return webpackConfig;
        },
    },
};
