const express = require('express');
const router = express.Router();


// Connection URL and database name



// Create a new MongoClient


// GET route for mongotest.ejs
router.get('/', (req, res) => {
    res.render('mongotest',{ title: 'Mongo' });
});

// POST route for inserting data into MongoDB
router.post('/', (req, res) => {
    // Connect to the MongoDB server
    console.log("req.body", req.body);
    var axios = require('axios');
var data = JSON.stringify({
    "collection": "listingsAndReviews",
    "database": "sample_airbnb",
    "dataSource": "Cluster0",
    "projection": {
        "_id": req.body.id
    }
});
            
var config = {
    method: 'post',
    url: 'https://us-east-2.aws.data.mongodb-api.com/app/data-xkowg/endpoint/data/v1/action/findOne',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': 'yz3Q2SfFCNdBCGwoKy1gknBc5WyDNV4nhUSLNuTzzNfulccG1X8GGzS2cc2u7wax',
    },
    data: data
};
    console.log("config", config);        
    axios(config)
    .then(function (response) {
        console.log("data", JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });
    console.log("req.body1", req.body);
    res.render('mongotest',{ title: 'Mongo' });   
});

module.exports = router;
