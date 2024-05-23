import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { WedInvCommentService } from "./wedInvComment.service";
import { WedInvCommentControllerBase } from "./base/wedInvComment.controller.base";

@swagger.ApiTags("wedInvComments")
@common.Controller("wedInvComments")
export class WedInvCommentController extends WedInvCommentControllerBase {
  constructor(
    protected readonly service: WedInvCommentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
