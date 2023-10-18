const express = require('express');
const router = express.Router();
const doPost = require('../Middleware/Postcall' )

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('callresttest', { title: 'Post Test' });
  });

router.post('/', async (req, res) => {
    const url = req.body.url;
    const data = req.body.body;
    const apiKey = req.body.token; // use the restapikey environment variable or default to "123"
    console.log( url, data, apiKey);
    const authHeader = "1234"
    if (authHeader !== apiKey) {
        return res.status(401).send('Unauthorized');
    }
    const headers = {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
    };
    const response = await doPost.doPost(url, headers, data);
    res.send(response);
});



module.exports = router;



