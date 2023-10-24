const express = require('express');
const router = express.Router();
const getRestApi = require('./Middleware/getrapi');
// get apikey from a global variable
const apiKey = process.env.API_KEY;


router.get('/', async (req, res) => {
    try {
        const data = await getRestApi('https://jsonplaceholder.typicode.com/posts', apiKey);
        res.send(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
