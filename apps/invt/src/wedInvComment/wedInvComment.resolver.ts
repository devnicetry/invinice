import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { WedInvCommentResolverBase } from "./base/wedInvComment.resolver.base";
import { WedInvComment } from "./base/WedInvComment";
import { WedInvCommentService } from "./wedInvComment.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => WedInvComment)
export class WedInvCommentResolver extends WedInvCommentResolverBase {
  constructor(
    protected readonly service: WedInvCommentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
