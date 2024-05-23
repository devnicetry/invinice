import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { WedInvGiftResolverBase } from "./base/wedInvGift.resolver.base";
import { WedInvGift } from "./base/WedInvGift";
import { WedInvGiftService } from "./wedInvGift.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => WedInvGift)
export class WedInvGiftResolver extends WedInvGiftResolverBase {
  constructor(
    protected readonly service: WedInvGiftService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
