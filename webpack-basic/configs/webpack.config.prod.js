const path = require("path");

const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {

    mode: "production",

    // 번들링 결과가 app.js 라는 이름으로
    entry: {
        app: ['./src/index.js']
    },

    // 웹팩에서 빌드를 완료하면 output에 명시되어 있는 정보를 통해 빌드파일을 생성
    // 개발모드에서는 파일을 생성하지 않고 메모리 형태로 브라우저에서 실행하기 때문에 파일로 추출되지 않음!
    output: {

        // filename: "bundle.js", // bundle.js라는 이름으로

        // entry에서 {key : value} 형식으로 설정하면 [name]으로 해줘야 app.js로 결과물 저장
        filename : '[name].js',
        path: path.resolve(__dirname,"..","build")
    },


    // 소스맵을 생성해 어플리케이션 디버그에 도움을 준다.
    devtool : 'inline-source-map',

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    // babel-loader는 .babelrc를 참고하여 리액트와 es6를 es5로 반환해줌
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
            /**
             * style-loader vs MiniCssExtractPlugin
             * - style-loader : 스타일 태그로 스타일링을 주입, css 파일을 요청하지 않기 때문에 페이지 랜딩 속도가 비교적 빠름
             * - MiniCssExtractPlugin : css 파일 요청, 해당 문서가 요청하는 파일만 가져온다는 점에서 스타일 태그에 비해 좋음
             */
            {
                test : /\.css$/,
                use : [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules : {
                                localIdentName: '[name]__[local]__[hash:base64:5]'
                            },
                            sourceMap: true
                        }
                    }
                ]
            },
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "public/index.html",
            filename: "index.html" // output으로 출력할 파일은 index.html
        }),
        new CleanWebpackPlugin()
    ],

}