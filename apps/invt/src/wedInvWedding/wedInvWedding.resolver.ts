import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { WedInvWeddingResolverBase } from "./base/wedInvWedding.resolver.base";
import { WedInvWedding } from "./base/WedInvWedding";
import { WedInvWeddingService } from "./wedInvWedding.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => WedInvWedding)
export class WedInvWeddingResolver extends WedInvWeddingResolverBase {
  constructor(
    protected readonly service: WedInvWeddingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
