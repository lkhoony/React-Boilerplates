const port = process.env.PORT || 3000;
const path = require("path");

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {

    /**
     * mode : 웹팩 빌드 옵션
     * - production : 최적화되어 빌드 되어지는 특징
     * - development : 빠르게 빌드하는 특징
     * - none : 아무 기능 없이 웹팩으로 빌드
     */
    mode: "development",

    // 애플리케이션 진입점
    entry: "./src/index.js",

    // 웹팩에서 빌드를 완료하면 output에 명시되어 있는 정보를 통해 빌드파일을 생성성
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname + "/build")
    },

    // 개발 서버 설정
    devServer: {
        host : 'localhost',
        port : port,
        open : true
    },

    /**
     * Loader : 웹팩은 기본적으로 자바스크립트와 json만 빌드할 수 있는데 js가 아닌 자원(html, css, image)를 빌드할 수 있도록 도와주는 속성
     *
     * - loader는 module과 rules라는 키워드를 사용
     *
     * - 형태
     *
     * module: {
          rules: [
            {
              test: '빌드할 파일 확장자 정규식'
              exclude: '제외할 파일 정규식'
              use: {
                loader: '사용할 로더 이름'
                option: '로더 옵션'
              }
            }
          ]
        }
     */
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            minimize: true,
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            }
        ]
    },

    /**
     * 웹팩의 기본적인 동작 외 추가적인 기능을 제공하는 속성
     *
     * loader는 파일을 해석하고 변환하는 과정에 관여하고, plugin은 결과물의 형태를 바꾸는 역할을 함
     */

    plugins: [
        new HtmlWebpackPlugin({
            template: "public/index.html",
            filename: "index.html"
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        })
    ],

}