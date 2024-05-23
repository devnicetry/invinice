import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { WedInvStoryResolverBase } from "./base/wedInvStory.resolver.base";
import { WedInvStory } from "./base/WedInvStory";
import { WedInvStoryService } from "./wedInvStory.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => WedInvStory)
export class WedInvStoryResolver extends WedInvStoryResolverBase {
  constructor(
    protected readonly service: WedInvStoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
