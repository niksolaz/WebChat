var express = require('express');
var app = express();
var http = require('http').Server(app);

var port = process.env.PORT || 3001;

app.get('/',function(req,res){
	res.sendFile(__dirname + '/index.html');
});

app.listen(port);
console.log('Web chat app in connected: ' + port);

