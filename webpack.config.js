const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const path = require("path")
const dev = process.env.NODE_ENV !== "production"

module.exports = {
    mode: dev ? "development" : "production",
    entry: ["@babel/polyfill", path.resolve(__dirname, "src", "index.tsx")],
    resolve: {
        extensions: [".js", ".ts", ".jsx", ".tsx"]
    },
    output: {
        path: path.resolve(__dirname, "dist"), filename: "[contenthash][name].js", publicPath: "/"
    },
    module: {
        rules: [{
            test: /(.ts|tsx$)/, loader: "babel-loader", exclude: /node_modules/
        }, {
            test: /.css$/,
            use: [dev ? "style-loader" : MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
            exclude: /node_modules/
        },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: "babel-loader"
                    },
                    {
                        loader: "react-svg-loader",
                        options: {
                            jsx: true
                        }
                    }
                ]
            }

        ]
    },
    devServer: {
        port: 3000, hot: true, historyApiFallback: true,
    },
    plugins: [new HtmlWebpackPlugin({template: path.resolve(__dirname, "index.html")}), new CleanWebpackPlugin(), dev && new MiniCssExtractPlugin(),]
}