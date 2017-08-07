/**
 * Created by mattxtlm on 07.08.17.
 */

const path = require('path');


module.exports = {
    entry: {
        app: './app.js',
        vendor: './vendor/canvas-to-blob.min.js'
    }

    ,
    output: {
        path: path.resolve(__dirname,'web','build'),
        filename: "[name].js"
    }
};