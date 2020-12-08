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

  // 连接时的钩子
  async handleConnection() {
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
      client.emit('message', '今天天气我也不知道咋样');
    }
    // client.emit('message', );
  }
}
