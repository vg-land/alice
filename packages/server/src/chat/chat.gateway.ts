import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';

@WebSocketGateway()
export class ChatGateway {
  @WebSocketServer()
  server: Server;

  users = 0;

  sendMessage(data: string) {
    this.server.emit('message', {
      data,
    });
  }

  // 连接时的钩子
  async handleConnection(client: Socket) {
    this.sendMessage('欢迎');
    console.log(client);
    this.users += 1;
  }

  // 断开连接时的钩子
  async handleDisconnect() {
    this.users -= 1;
  }

  @SubscribeMessage('online')
  async handleOnline(client: Socket, payload) {
    client.emit('message', {
      data: `Hi`,
    });
    return this.users;
  }

  @SubscribeMessage('message')
  async handleMessage(client: Socket, text) {
    if (text.includes('天气')) {
      this.sendMessage('尚未实现');
    } else {
      this.sendMessage('收到你的消息了');
    }
    // client.emit('message', );
  }
}
