const express = require('express');
const router = express.Router();


// Connection URL and database name



// Create a new MongoClient


// GET route for mongotest.ejs
router.get('/', (req, res) => {
    res.render('mongotest',{ title: 'Mongo', data: '' });
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
        "_id": req.body._id,
        "listing_url":1,
        "name":1,
        "summary":1,
        "description":1,
        "notes":1,
        "access":1,
        "house_rules":1,
        "property_type":1,
        "room_type":1,
        "bed_type":1,
        "minimum_nights":1,
        "maximum_nights":1,
        "cancellation_policy":1,
        "last_scraped":1,
        "calendar_last_scraped":1,
        "first_review":1,
        "last_review":1,
        "accommodates":1,
        "bedrooms":1,
        "beds":1,
        "number_of_reviews":1,
        "bathrooms":1,
        "amenities":1,
        "price":1,
        "security_deposit":1,
        "cleaning_fee":1,
        "extra_people":1,
        "guests_included":1,
        "images":1,
        "host":1,
        "address":1,
        "availability":1,
        "review_scores":1,
        "reviews":1   


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
    //console.log("config", config);        
    axios(config)
    .then(function (response) {
        //console.log("data", JSON.stringify(response.data));
        res.render('mongotest',{ title: 'Mongo', data: JSON.stringify(response.data) })
    })
    .catch(function (error) {
        console.log(error);
    });
    //console.log("req.body1", req.body);
   // res.render('mongotest',{ title: 'Mongo' });   
});

module.exports = router;
