import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { WedInvPresetService } from "./wedInvPreset.service";
import { WedInvPresetControllerBase } from "./base/wedInvPreset.controller.base";

@swagger.ApiTags("wedInvPresets")
@common.Controller("wedInvPresets")
export class WedInvPresetController extends WedInvPresetControllerBase {
  constructor(
    protected readonly service: WedInvPresetService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
