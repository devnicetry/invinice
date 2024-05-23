import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { WedInvGalleryResolverBase } from "./base/wedInvGallery.resolver.base";
import { WedInvGallery } from "./base/WedInvGallery";
import { WedInvGalleryService } from "./wedInvGallery.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => WedInvGallery)
export class WedInvGalleryResolver extends WedInvGalleryResolverBase {
  constructor(
    protected readonly service: WedInvGalleryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
