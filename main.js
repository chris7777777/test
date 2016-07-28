var apiai = require('apiai');
 
var app = apiai("91e84e51a069486498a49fafd0a9d3b2");
 
var request = app.textRequest('<Your text query>');
 
request.on('response', function(response) {
    console.log(response);
});
 
request.on('error', function(error) {
    console.log(error);
});
 
request.end()
