const Server = require("socket.io").Server;

const sockets = [];

const io = new Server(3000, {
    cors: {
      origin: "*",
    }
});
io.on("connection", (socket) => {
    sockets.push(socket);
    console.log("connected");

    socket.emit("/msg", `You are connected, talk with ${sockets.length} peoples`);
    socket.on("/msg", (body) => {
        console.log("message received");
        for(let s of sockets){
            s.emit("/msg", body);
        }
    })

})
