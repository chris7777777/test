var apiai = require('apiai');
 
var app = apiai("5d1c3ccb0a7644e688411b2e346a3551");
 
var request = app.textRequest('<Your text query>');
 
request.on('response', function(response) {
    console.log(response);
});
 
request.on('error', function(error) {
    console.log(error);
});
 
request.end()