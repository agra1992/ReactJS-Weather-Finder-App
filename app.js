var express = require('express');

var app = express();

app.use(express.static('public'));

app.listen(2000, function() {
	console.log('Server up on PORT 2000');
});