'use strict';

const yelp = require('yelp-fusion');

const client = yelp.client('ezVut3lGqFJ7HXBTot9_Y8Nv2lcAwbVucOjwhk-g2iAwiyG5gnZ0NBm9U0D7X5bxAhRI4RhJ9DHVfg37r_32BRvg2Ys0jHSZvPoW5IymJq3DyPI9bVzz8Oa3lEkxXHYx');

client.search({
  term:'burgers',
  location: 'new york'
}).then(response => {
  console.log(response.jsonBody.businesses);
}).catch(e => {
  console.log(e);
});