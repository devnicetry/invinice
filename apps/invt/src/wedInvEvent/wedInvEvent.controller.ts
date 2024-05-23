import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { WedInvEventService } from "./wedInvEvent.service";
import { WedInvEventControllerBase } from "./base/wedInvEvent.controller.base";

@swagger.ApiTags("wedInvEvents")
@common.Controller("wedInvEvents")
export class WedInvEventController extends WedInvEventControllerBase {
  constructor(
    protected readonly service: WedInvEventService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
