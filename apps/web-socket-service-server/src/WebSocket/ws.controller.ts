// import * as common from "@nestjs/common";
// import * as swagger from "@nestjs/swagger";
// import * as errors from "../errors";
// import { WSService } from "./ws.service";

// @swagger.ApiTags("webSocketApis")
// @common.Controller("web-socket-apis")
// export class WSController {
//   constructor(protected readonly service: WSService) { }

//   @common.Post("/connect")
//   @swagger.ApiOkResponse({
//     type: String
//   })
//   @swagger.ApiNotFoundResponse({
//     type: errors.NotFoundException
//   })
//   @swagger.ApiForbiddenResponse({
//     type: errors.ForbiddenException
//   })
//   async ConnectWebSocket(
//     @common.Body()
//     userQuery: string
//   ): Promise<Buffer> {
//     const chatClientResp = await this.service.ChatClient(userQuery);

//     return chatClientResp;
//   }


//   @common.Get("/hello")
//   @swagger.ApiOkResponse({
//     type: String
//   })
//   @swagger.ApiNotFoundResponse({
//     type: errors.NotFoundException
//   })
//   @swagger.ApiForbiddenResponse({
//     type: errors.ForbiddenException
//   })
//   async Hello(): Promise<string> {
//     return "Hello World!";
//   }
// }
