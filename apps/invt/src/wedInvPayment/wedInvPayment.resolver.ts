import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { WedInvPaymentResolverBase } from "./base/wedInvPayment.resolver.base";
import { WedInvPayment } from "./base/WedInvPayment";
import { WedInvPaymentService } from "./wedInvPayment.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => WedInvPayment)
export class WedInvPaymentResolver extends WedInvPaymentResolverBase {
  constructor(
    protected readonly service: WedInvPaymentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
