import * as graphql from "@nestjs/graphql";
import { WebSocketApiService } from "./websocketapi.service";

export class WebSocketApiResolver {
  constructor(protected readonly service: WebSocketApiService) {}

  @graphql.Mutation(() => String)
  async ConnectWebSocket(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.ConnectWebSocket(args);
  }
}
