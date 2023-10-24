const axios = require('axios');

const patchRestCall = async (url, apiKey, data) => {
    try {
        const response = await axios.patch(url, data, {
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

module.exports = patchRestCall;
