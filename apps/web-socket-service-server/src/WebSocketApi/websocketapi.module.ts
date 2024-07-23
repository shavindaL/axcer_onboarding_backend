import { Module } from "@nestjs/common";
import { WebSocketApiService } from "./websocketapi.service";
import { WebSocketApiController } from "./websocketapi.controller";
import { WebSocketApiResolver } from "./websocketapi.resolver";

@Module({
  controllers: [WebSocketApiController],
  providers: [WebSocketApiService, WebSocketApiResolver],
  exports: [WebSocketApiService],
})
export class WebSocketApiModule {}
