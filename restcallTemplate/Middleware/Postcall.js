async function doPost(url, data, apiKey) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify(data)
    });
    return await response.json();
}

module.exports = { doPost };
