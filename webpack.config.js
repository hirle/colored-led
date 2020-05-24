const path = require('path');

module.exports = {
    entry: "./src/ColoredLed.tsx",
    output: {
        path: path.join(__dirname, 'lib'),
        filename: 'ColoredLed.js'
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader'
            }
        ]
    }
}
