import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { WedInvVideoService } from "./wedInvVideo.service";
import { WedInvVideoControllerBase } from "./base/wedInvVideo.controller.base";

@swagger.ApiTags("wedInvVideos")
@common.Controller("wedInvVideos")
export class WedInvVideoController extends WedInvVideoControllerBase {
  constructor(
    protected readonly service: WedInvVideoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
