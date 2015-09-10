var express = require('express');
var app = express();
var server = require('http').createServer(app);
var port =  process.env.OPENSHIFT_NODEJS_PORT || 3000;   // Port 8080 if you run locally
var address =  process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1"; // Listening to localhost if you run locally
var io = require('socket.io')(server); 

	io.on('connection', function (socket) {
		var a;
		socket.on('move', function (data){
	        a = data.position;
	        console.log("move to " + a); 

	        socket.broadcast.emit('PlayerMove', {"Position":data.position,"name":"lz"});
	    });
	});

	app.get('*', function(req, res){
		res.sendfile('/public/index.html');
	});


server.listen(port, address);
console.log('Server is running on '+address+":" + port);
exports = module.exports = app;