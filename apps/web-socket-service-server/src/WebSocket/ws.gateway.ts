import { OnModuleInit } from "@nestjs/common";
import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server } from "socket.io";
import { WSService } from "./ws.service";

@WebSocketGateway(5000, { cors: true })
export class WSGateway implements OnModuleInit {
    socketId?: string;

    constructor(protected readonly service: WSService) { }

    @WebSocketServer()
    server: Server | undefined;

    onModuleInit() {
        this.server?.on('connection', (socket) => {
            this.socketId = socket.id;
            console.log('New User Connection', socket.id);
        });
    }

    @SubscribeMessage('user_message')
    async onNewMessage(@MessageBody() body: any) {
        console.log(body.message);
        const audioBuffer: Buffer = await this.service.ChatClient(body.message);

        this.server?.to(this.socketId!).emit('onmessage', {
            message: 'Hello from server',
            body: audioBuffer
        })
    }
};
