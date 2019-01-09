'use strict';

const yelp = require('yelp-fusion');
const express = require('express');
const bodyParser = require('body-parser');

const client = yelp.client('ezVut3lGqFJ7HXBTot9_Y8Nv2lcAwbVucOjwhk-g2iAwiyG5gnZ0NBm9U0D7X5bxAhRI4RhJ9DHVfg37r_32BRvg2Ys0jHSZvPoW5IymJq3DyPI9bVzz8Oa3lEkxXHYx');


const app = express();

app.use(express.urlencoded())

 client.search({
  term: "'" + term + "'",
  location: "'" + location + "'"
}).then(response => {
  res.send(response.jsonBody.businesses);
}).catch(e => {
  console.log(e);
});

app.post('/submit-yelp-query', (req, res) => {

 res.end()
})