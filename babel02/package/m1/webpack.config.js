const path = require('path')

module.exports = {
    entry: "./inner.js",
    output: {
        path: path.resolve(__dirname, ''),
        filename: "bundle.js"
    },
    mode: 'none',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    /*                    options:{
                                            presets:['@babel/preset-env']
                                        }*/
                }
            }
        ]
    }
}
