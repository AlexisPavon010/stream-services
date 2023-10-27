import { Injectable } from '@nestjs/common';
import { Socket } from 'socket.io';


interface Clients {
  [id: string]: Socket
}

@Injectable()
export class LivePreviewWsService {
  private clients: Clients = {}


  registerClient(client: Socket) {
    this.clients[client.id] = client;

  }

  removeClient(client: Socket) {
    delete this.clients[client.id];
  }

}
