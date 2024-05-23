import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { WedInvGiftService } from "./wedInvGift.service";
import { WedInvGiftControllerBase } from "./base/wedInvGift.controller.base";

@swagger.ApiTags("wedInvGifts")
@common.Controller("wedInvGifts")
export class WedInvGiftController extends WedInvGiftControllerBase {
  constructor(
    protected readonly service: WedInvGiftService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
