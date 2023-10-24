const axios = require('axios');

function getRestApi(url,apiKey) {
    const headers = {
        'Authorization': `Bearer ${apiKey}`
    };

    return axios.get('https://example.com/api', { headers })
        .then(response => {
            console.log(response.data);
            return response.data;
        })
        .catch(error => {
            console.error(error);
            throw error;
        });
}
// export function(s) for use in other files
module.exports = getRestApi;



