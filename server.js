var express = require('express');
var restapi = express();

restapi.set('port', (process.env.PORT || 3001));
restapi.use(express.static('public'));

restapi.listen(restapi.get('port'), function() {
        console.log('Web app running on port', restapi.get('port'));
});

console.log("APP run into http://localhost:3001/default.html");