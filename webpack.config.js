const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const {HotModuleReplacementPlugin} = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")
module.exports = {
    mode: "development",
    entry: ["@babel/polyfill", "./index.jsx"],
    resolve: {
        extensions: [".js", ",ts", ".jsx"]
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[contenthash][name].js"
    },
    module: {
        rules: [
            {
                test: /(.jsx$)/,
                loader: "babel-loader",
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        port: 3000,
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin({template: path.resolve(__dirname, "index.html")}),
        new CleanWebpackPlugin(),
        new HotModuleReplacementPlugin()
    ]
}