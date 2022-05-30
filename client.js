
const socket = io("ws://localhost:3000");
socket.on("/msg", (body) => {
    const msgs = document.getElementById("msgs");
    msgs.value += body + "\n";
 
});
function poslji(){
    const msg = document.getElementById("msg").value;
  socket.emit("/msg", msg);

}
