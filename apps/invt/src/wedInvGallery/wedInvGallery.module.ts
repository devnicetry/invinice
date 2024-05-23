import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { WedInvGalleryModuleBase } from "./base/wedInvGallery.module.base";
import { WedInvGalleryService } from "./wedInvGallery.service";
import { WedInvGalleryController } from "./wedInvGallery.controller";
import { WedInvGalleryResolver } from "./wedInvGallery.resolver";

@Module({
  imports: [WedInvGalleryModuleBase, forwardRef(() => AuthModule)],
  controllers: [WedInvGalleryController],
  providers: [WedInvGalleryService, WedInvGalleryResolver],
  exports: [WedInvGalleryService],
})
export class WedInvGalleryModule {}
