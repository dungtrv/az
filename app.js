var io = require('socket.io')(1234);

io.on('connection', function (socket) {
	var a;
	socket.on('move', function (data){
        a = data.position;
        console.log("move to " + a); 

        socket.broadcast.emit('PlayerMove', {"Position":data.position,"name":"lz"});
    });
});