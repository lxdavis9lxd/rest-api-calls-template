const axios = require('axios');

const deleteData = async (url, apiKey, data) => {
    try {
        const response = await axios.delete(url, {
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': apiKey
            },
            data: data
        });
        return response.data;
    } catch (error) {
        throw new Error(error);
    }
};

module.exports = deleteData;
