import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { WedInvShareService } from "./wedInvShare.service";
import { WedInvShareControllerBase } from "./base/wedInvShare.controller.base";

@swagger.ApiTags("wedInvShares")
@common.Controller("wedInvShares")
export class WedInvShareController extends WedInvShareControllerBase {
  constructor(
    protected readonly service: WedInvShareService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
