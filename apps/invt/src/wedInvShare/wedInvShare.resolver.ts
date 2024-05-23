import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { WedInvShareResolverBase } from "./base/wedInvShare.resolver.base";
import { WedInvShare } from "./base/WedInvShare";
import { WedInvShareService } from "./wedInvShare.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => WedInvShare)
export class WedInvShareResolver extends WedInvShareResolverBase {
  constructor(
    protected readonly service: WedInvShareService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
