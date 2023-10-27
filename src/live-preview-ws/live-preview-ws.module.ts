import { Module } from '@nestjs/common';
import { LivePreviewWsService } from './live-preview-ws.service';
import { LivePreviewWsGateway } from './live-preview-ws.gateway';

@Module({
  providers: [LivePreviewWsGateway, LivePreviewWsService],
})
export class LivePreviewWsModule {}
