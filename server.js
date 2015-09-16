var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3001;

app.get('/',function(req,res){
	res.sendFile('/index.html');
});

io.on('connection',function(socket){
	console.log('a user connected');
});
app.listen(port);
console.log('Web chat app in connected: ' + port);

