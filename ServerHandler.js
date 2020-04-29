import io from "socket.io-client";
import * as Consts from './Consts';

class ServerHandler {
    constructor(addr = null) {
        this.socket = null;
        this.messageStore = [];

        if (addr != null)
            this.init(addr);
        // this.send(msg);
        // this.disconnect();
    }

    init = (addr, allMsgFunc, singleMsgFunc) => {
        if (!this.socket) {
            // Only make a socket connection if one doesn't already exist
            if (addr)
                this.socket = io(addr);
            else
                this.socket = io(Consts.DEFAULT_SERVER_URL);
        }
    }

    send = (msgs = []) => {
        // msgs should be an array of gifted-chat compatible objects

        // FIXME: once using rpi:
        //  Make this function structure a json object to emit (in place of the last two params below) that includes:
        //          - the message
        //          - a user id
        //          - a timestamp
        //          - maybe a key? (or other things)
        msgs.forEach((msg) =>  {
            this.socket.emit(Consts.SOCKET_SEND_MSG, 'username', msg.text);
        });

    }

    on = (msgType, handlerFunc, handlerCtx) => {
        this.socket.on(msgType, (msg) => {
            // Make sure msg is an array, just incase we get a single object
            if(Array.isArray(msg) == false) {
                msg = [msg];
            }

            // This function may or may not need handlerCtx, it is up to the dev using ServerHandler
            // It is just a good way to pass needed data into it (hopefully just the 'this' obj)
            handlerFunc(msg, handlerCtx);
        });
    }
}

export default ServerHandler;