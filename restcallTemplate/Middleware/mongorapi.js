const axios = require('axios');

function postToMongoDB(method, url, apiKey, data) {
    const config = {
        method: method,
        url: url,
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': apiKey
        },
        data: data
    };

    return axios(config);
}

module.exports = postToMongoDB;
