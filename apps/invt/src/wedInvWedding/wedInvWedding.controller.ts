import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { WedInvWeddingService } from "./wedInvWedding.service";
import { WedInvWeddingControllerBase } from "./base/wedInvWedding.controller.base";

@swagger.ApiTags("wedInvWeddings")
@common.Controller("wedInvWeddings")
export class WedInvWeddingController extends WedInvWeddingControllerBase {
  constructor(
    protected readonly service: WedInvWeddingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
