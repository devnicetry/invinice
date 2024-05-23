import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { WedInvVideoResolverBase } from "./base/wedInvVideo.resolver.base";
import { WedInvVideo } from "./base/WedInvVideo";
import { WedInvVideoService } from "./wedInvVideo.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => WedInvVideo)
export class WedInvVideoResolver extends WedInvVideoResolverBase {
  constructor(
    protected readonly service: WedInvVideoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
