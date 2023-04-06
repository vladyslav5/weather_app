const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const {HotModuleReplacementPlugin} = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")
module.exports = {
    mode: "development",
    entry: ["@babel/polyfill", path.resolve(__dirname,"src","index.tsx")],
    resolve: {
        extensions: [".js", ",ts", ".jsx",".tsx"]
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[contenthash][name].js"
    },
    module: {
        rules: [
            {
                test: /(.ts|tsx$)/,
                loader: "babel-loader",
                exclude: /node_modules/
            },
            {
                test:/.css$/,
                use:["style-loader","css-loader","postcss-loader"],
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