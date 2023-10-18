const fetch = require('node-fetch');

function getCall(url, apiKey) {
    return fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${apiKey}`
        }
    })
    .then(response => response.json())
    .catch(error => console.error(error));
}

module.exports = getCall;
