import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { WedInvGalleryService } from "./wedInvGallery.service";
import { WedInvGalleryControllerBase } from "./base/wedInvGallery.controller.base";

@swagger.ApiTags("wedInvGalleries")
@common.Controller("wedInvGalleries")
export class WedInvGalleryController extends WedInvGalleryControllerBase {
  constructor(
    protected readonly service: WedInvGalleryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
