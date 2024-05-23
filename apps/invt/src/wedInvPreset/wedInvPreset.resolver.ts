import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { WedInvPresetResolverBase } from "./base/wedInvPreset.resolver.base";
import { WedInvPreset } from "./base/WedInvPreset";
import { WedInvPresetService } from "./wedInvPreset.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => WedInvPreset)
export class WedInvPresetResolver extends WedInvPresetResolverBase {
  constructor(
    protected readonly service: WedInvPresetService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
