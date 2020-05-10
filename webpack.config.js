module.exports = {
    mode: 'development',
    entry: './ts/Main.ts',
    output: {
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['ts', 'js']
    },
    module: {
        rules: [
            { test: /\.ts$/, use: 'ts-loader' }
        ]
    }
}