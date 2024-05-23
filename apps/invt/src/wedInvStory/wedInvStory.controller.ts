import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { WedInvStoryService } from "./wedInvStory.service";
import { WedInvStoryControllerBase } from "./base/wedInvStory.controller.base";

@swagger.ApiTags("wedInvStories")
@common.Controller("wedInvStories")
export class WedInvStoryController extends WedInvStoryControllerBase {
  constructor(
    protected readonly service: WedInvStoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
