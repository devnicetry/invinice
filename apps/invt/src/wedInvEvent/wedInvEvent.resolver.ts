import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { WedInvEventResolverBase } from "./base/wedInvEvent.resolver.base";
import { WedInvEvent } from "./base/WedInvEvent";
import { WedInvEventService } from "./wedInvEvent.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => WedInvEvent)
export class WedInvEventResolver extends WedInvEventResolverBase {
  constructor(
    protected readonly service: WedInvEventService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
