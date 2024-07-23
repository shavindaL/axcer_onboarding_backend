import { Module } from "@nestjs/common";
import { WSService } from "./ws.service";
import { WSGateway } from "./ws.gateway";

@Module({
  providers: [WSGateway, WSService],
  exports: [WSService],
})
export class WSModule { }
