module.exports = [
    {
        test: /\.jsx$/,
        loader: 'jsx-loader?insertPragma=React.DOM&harmony',
        exclude: /node_modules/
    },
    {
        test: /\.js$/,
        loader: 'jsx-loader?harmony',
        exclude: /node_modules/
    },
    {
        test: /\.styl$/,
        loader: 'style-loader!css-loader!stylus-loader',
        exclude: /node_modules/
    },
    {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
        exclude: /node_modules/
    }
]