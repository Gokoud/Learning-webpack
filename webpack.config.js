const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {VueLoaderPlugin} = require("vue-loader");

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "./src/main.js"),
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader",
            },
            {
                test: /\.css$/,
                use: [
                    "vue-style-loader", 
                    "css-loader"
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "./index.html"),
            title: "搭 vue 开发环境",
            filename: "index.html",
        }),
        new VueLoaderPlugin(),
    ],
    // devtool: 'inline-source-map', 仅开发环境使用
    output: {
        filename: "js/bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
};
