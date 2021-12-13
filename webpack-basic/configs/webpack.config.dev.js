const port = process.env.PORT || 3000; // 환경변수 port가 없으면 기본포트를 제공하고 모듈을 내보내는 일
const path = require("path");

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {

    /**
     * mode : 웹팩 빌드 옵션
     * - production : 최적화되어 빌드 되어지는 특징
     * - development : 빠르게 빌드하는 특징
     * - none : 아무 기능 없이 웹팩으로 빌드
     */
    mode: "development",

    // 애플리케이션 진입점 : index 파일을 기준으로 import되어 있는 모든 파일들을 찾아 하나의 파일로 합치게 됨
    // entry: "./src/index.js",

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

    // 개발 서버 설정
    devServer: {
        host : 'localhost',
        port : port,
        open : true,
        historyApiFallback : true
    },

    // 소스맵을 생성해 어플리케이션 디버그에 도움을 준다.
    devtool : 'inline-source-map',

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
                test: /\.global\.css$/,
                use : [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules : {
                                exportLocalsConvention : 'camelCase',
                                localIdentName: '[name]__[local]__[hash:base64:5]'
                            },
                            sourceMap: true
                        }
                    }
                ]
            },

            {
                test: /^((?!\.global).)*\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules : {
                                exportLocalsConvention : 'camelCase',
                                localIdentName: '[name]__[local]__[hash:base64:5]'
                            },
                            sourceMap: true
                        }
                    }
                ]
            },
            // SASS support - compile all other .scss files and pipe it to style.css
            {
                test: /^((?!\.global).)*\.(scss|sass)$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules : {
                                exportLocalsConvention : 'camelCase',
                                localIdentName: '[name]__[local]__[hash:base64:5]'
                            },
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            }

            // {
            //     // css를 추출해서 파일로 저장
            //     test: /\.css$/,
            //     use: [MiniCssExtractPlugin.loader, 'css-loader']
            // },
            // {
            //     test: /\.scss$/,
            //     use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            // }
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
            filename: "index.html" // output으로 출력할 파일은 index.html
        })
    ],

}