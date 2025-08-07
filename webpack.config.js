// webpack.config.js
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js", // output dest for JS
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    devtool: "eval-source-map", // allows errors in browsers relate to our original src/ code. also allows our code to appear in sources tab in the chrome browser.
    devServer: {
        watchFiles: ["./src/template.html"], // The html is not bundled or inputted into JS so we need to actually watch this. Everything imported into JS is automatically watched by devServer
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html", // loads html and attach JS link to it
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"], //css loader loads the css file in js, style loader applies the css in js file
            },
            {
                test: /\.html$/i,
                loader: "html-loader", // compiles images and links in html properly from src to dist
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource", // manages images handled in JS. tells bundler that images imported are assets and not JS 
            }
        ],
    },
};
