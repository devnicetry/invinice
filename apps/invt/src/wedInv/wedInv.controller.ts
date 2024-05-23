import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { WedInvService } from "./wedInv.service";
import { WedInvControllerBase } from "./base/wedInv.controller.base";

@swagger.ApiTags("wedInvs")
@common.Controller("wedInvs")
export class WedInvController extends WedInvControllerBase {
  constructor(
    protected readonly service: WedInvService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
