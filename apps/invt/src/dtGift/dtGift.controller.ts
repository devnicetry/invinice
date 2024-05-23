import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DtGiftService } from "./dtGift.service";
import { DtGiftControllerBase } from "./base/dtGift.controller.base";

@swagger.ApiTags("dtGifts")
@common.Controller("dtGifts")
export class DtGiftController extends DtGiftControllerBase {
  constructor(
    protected readonly service: DtGiftService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
