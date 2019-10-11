const path = require('path');

const config = {
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: '[name].js',
        chunkFilename: 'chunk/[name].js'
    },
    module: {
        rules: [
            { // js
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['es2015','react']
                }
            },
            // { // css
            //     test: /\.css$/,
            //     use: use[{
            //         loader: 'css-loader',
            //         options: {
            //             modules: true
            //         }
            //     },{
            //         loader: 'postcss-loader',
            //         options: {
            //             modules: true
            //         }
            //     }]
            // },{ //html
            //     test: /\.html$/,
            //     use: {
            //         loader: 'unerscore-template-loader'
            //     }
            // },{ // img
            //     test: /\.(jpe?g|png|gif|svg)(\?\S*)?$/i,
            //     use: [{
            //         loader: 'url-loader',
            //         options: {
            //             limit: 8 * 1024,
            //             name: 'res/[name]-[hash:7].[ext]'
            //         }
            //     }]
            // },{
            //     test: /\.(otf|eot|ttf|woff2?)(\?\S*)?$/i
            // }
        ]
    },
    // plugin: [
    
    // ],
    // resolve: {
    //     // modules: [ // 配置modules来提升webpack的构建速度
    //     //     'src',
    //     //     'node_modules'
    //     // ],
    //     alias: {
    //         // 设置这个 alias 便于直接从 src 目录引用文件, 放心不会与引用 scope 包时冲突
    //         // 例如: import c from '@/a/b/c.js';
    //         // 但是注意, 在 CSS 的 @import 中使用这个 alias 时, 必须加一个 ~ 符号在最前面
    //         // 因为直接 @import url(@/a/b/c.css) 会被解析为 './@/a/b/c.css' 这样当然就找不到模块了
    //         // 正确的用法是: @import url(~@/a/b/c.css)
    //         '@': path.resolve(process.cwd(), 'src')
    //     }
    // }
}

module.exports = config;