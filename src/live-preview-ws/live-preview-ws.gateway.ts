import { OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { Socket } from 'socket.io';

import { LivePreviewWsService } from './live-preview-ws.service';

@WebSocketGateway({ cors: true, })
export class LivePreviewWsGateway implements OnGatewayConnection, OnGatewayDisconnect {
  constructor(private readonly livePreviewWsService: LivePreviewWsService) { }

  handleDisconnect(client: any) {
    this.livePreviewWsService.removeClient(client)
  }


  handleConnection(client: Socket, ...args: any[]) {
    this.livePreviewWsService.registerClient(client)

  }

  @SubscribeMessage('[CLIENT]: message-from-client')
  onMessageFromClient(client: Socket, payload: any) {
    client.broadcast.emit('[SERVER]: set-image-preview', {
      message: payload.message || 'no-message!!'
    });

  }

  @SubscribeMessage('[CLIENT]: change-tranisition')
  onChangePreview(client: Socket, payload: any) {
    client.broadcast.emit('[SERVER]: set-image-preview', payload);

  }

}
