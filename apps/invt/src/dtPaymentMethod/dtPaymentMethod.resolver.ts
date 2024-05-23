import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { DtPaymentMethodResolverBase } from "./base/dtPaymentMethod.resolver.base";
import { DtPaymentMethod } from "./base/DtPaymentMethod";
import { DtPaymentMethodService } from "./dtPaymentMethod.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DtPaymentMethod)
export class DtPaymentMethodResolver extends DtPaymentMethodResolverBase {
  constructor(
    protected readonly service: DtPaymentMethodService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
