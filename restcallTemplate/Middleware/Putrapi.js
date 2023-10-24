const axios = require('axios');

const putRestCall = async (url, apiKey, data) => {
    try {
        const response = await axios.put(url, data, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            }
        });
        return response.data;
    } catch (error) {
        throw new Error(error);
    }
};

module.exports = putRestCall;
