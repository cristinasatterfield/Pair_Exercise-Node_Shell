const request = require('request');
module.exports = function (url,done) {
  request(url, function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    done(body); // Print the HTML for the url
  });
}
