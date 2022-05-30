const io = require("socket.io-client");
const assert = require("assert");

const serverURL = "ws://localhost:3000";

describe("Testing /msg", () => {

    it("Socket connected", (done) => {
        const socket = io(serverURL);
        socket.on("/msg", (body) => {
            assert(body.startsWith(`You are connected, talk with`));
            assert(body.endsWith(`peoples`));
            socket.disconnect();
            done();
        })
        socket.on("connect", () => {
            assert(socket.connected);
         
        });
     
    }

    );

    it("Server respond with same message", (done) => {
        const socket = io(serverURL);
        let count = 0;
        socket.on("/msg", (body) => {
            count++;
            if(count == 2){
                assert.equal(body, "123 test");
                socket.disconnect();
                done();
            }

        })
        socket.emit("/msg", "123 test");
    })

    
}) 