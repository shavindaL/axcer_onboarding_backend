import { Injectable } from "@nestjs/common";

@Injectable()
export class WebSocketApiService {
  constructor() {}
  async ConnectWebSocket(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
