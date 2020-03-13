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
        // console.log('in handler init!! here is the value of this: ', this);

        if (!this.socket) {
            // Only make a socket connection if one doesn't already exist
            if (addr)
                this.socket = io(addr);
            else
                this.socket = io(Consts.DEFAULT_SERVER_URL);
        }

        // // Set up message listeners
        // this.socket.on(Consts.SOCKET_REC_ALL_MSGS, msg => {
        //     console.log(msg);
        // })

        // this.socket.on(Consts.SOCKET_REC_SINGLE_MSG, msg => {
        //     this.messageStore.push({text: 'JSON.stringify(msg)', user: 'Joe Bongo'});
        //     console.warn('got stuff back', this.messageStore);
        // });
    }

    send = (msgs = []) => {
        // msgs should be an array of gifted-chat compatible objects
        // TODO: for now, this is just 2 things, hellome (username) and a string Echo! (message, but it yells at me to try and pass a var in)
        msgs.forEach((msg) => {
            this.socket.emit(Consts.SOCKET_SEND_MSG, 'hellome', msg.text);
        });

        // TODO: Make this take the message, and then structure a json object that includes:
        //          - the message
        //          - a user id
        //          - a timestamp
        //          - maybe a key? (or other things)
    }

    on = (msgType, handlerFunc, handlerCtx) => {
        console.log('in on function');
        this.socket.on(msgType, (msg) => {

            // console.warn('Received message in server handler:', msg);
            if(Array.isArray(msg) == false) {
                msg = [msg];
            }

            handlerFunc(msg, handlerCtx)
        });
    }
}

export default ServerHandler;