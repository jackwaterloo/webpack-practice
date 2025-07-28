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
                type: "asset/resource", // manages images handeled in JS. tells bundler that images imported are assets and not JS 
            }
        ],
    },
};
