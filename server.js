var express = require('express');
var app = express();
var port = process.env.PORT || 3001;

app.get('/',function(req,res){
	res.send('Hi by Web Chat!');
});

app.listen(port);
console.log('Web chat app in connected: ' + port);

