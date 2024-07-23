import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { WebSocketApiService } from "./websocketapi.service";

@swagger.ApiTags("webSocketApis")
@common.Controller("webSocketApis")
export class WebSocketApiController {
  constructor(protected readonly service: WebSocketApiService) {}

  @common.Post("/connect")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ConnectWebSocket(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.ConnectWebSocket(body);
      }
}
