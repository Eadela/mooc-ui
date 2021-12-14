/* eslint-disable */
const {VueLoaderPlugin} = require('vue-loader');
const glob = require('glob')
const path = require('path');
const list = {
    card: './components/lib/card/index.js',
    demo: './components/lib/demo/index.js',
}

async function makeList(dirPath, list) {
    const files = glob.sync(`${dirPath}/**/index.js`)
    // console.log('🚀 ~ file: webpack.config.js ~ line 9 ~ makeList ~ files', files)
    for (const file of files) {
        console.log('line 14 ~ makeList ~ file', file)
        const component = file.split(/[/.]/)[2]
        console.log('component', component)
        list[component] = `./${file}`
        // console.log('🚀 ~ file: webpack.config.js ~ line 13 ~ makeList ~ component', component)
    }
    // console.log('🚀 ~ file: webpack.config.js ~ line 9 ~ makeList ~ list', list)
}

makeList('components/lib',list)

module.exports = {
    entry: list,
    output: {
        filename: '[name].umd.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'umi',
        libraryTarget: 'umd'
    },
    mode: 'development',
    plugins: [
        new VueLoaderPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [{loader:'vue-loader'}]
            }
        ]
    }
}