const axios = require('axios');

const postRestCall = async (url, apiKey, data) => {
    try {
        const response = await axios.post(url, data, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            }
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

module.exports = postRestCall;
