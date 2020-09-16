module.exports = {
    mode: 'development',
    entry: './ts/Main.ts',
    output: {
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.js', '.json']
    },
    module: {
        rules: [
            {   test: [
                /\.ts$/,
                ],
                use: [
                'ts-loader'
            ]},
            {   test: [
                /\.s[ac]ss$/i
                ],
                use: [
                'style-loader',
                'css-loader',
                'sass-loader',
            ],
        },
        ],
    },
};