const path = require('path');

module.exports = {
    mode: 'production',
    target: 'web',
    stats: {
        warnings: false,
    },
    entry: './index.js',
    output: {
        library: 'jazzicon',
        filename: 'io84-jazzicon.min.js',
        path: path.resolve(__dirname, 'dist')
    },
}