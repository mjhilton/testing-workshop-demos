var http = require('http');
var https = require('https');

function httpGet(url) {
    console.log('Making a HTTP request to ' + url);

    return new Promise((resolve, reject) => {
        var lib = url.startsWith('https') ? https : http;
        var request = lib.get(url, (response) => {
            if (response.statusCode < 200 || response.statusCode > 299) {
                reject(new Error('Failed to load page, status code: ' + response.statusCode));
            }

            var body = [];
            response.on('data', (chunk) => body.push(chunk));
            response.on('end', () => {
                console.log('HTTP request complete.');
                resolve(body.join(''))
            });
        });

        request.on('error', (err) => reject(err))
    });
};

module.exports = {
    get : httpGet
};