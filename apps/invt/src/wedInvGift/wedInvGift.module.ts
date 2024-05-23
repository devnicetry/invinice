import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { WedInvGiftModuleBase } from "./base/wedInvGift.module.base";
import { WedInvGiftService } from "./wedInvGift.service";
import { WedInvGiftController } from "./wedInvGift.controller";
import { WedInvGiftResolver } from "./wedInvGift.resolver";

@Module({
  imports: [WedInvGiftModuleBase, forwardRef(() => AuthModule)],
  controllers: [WedInvGiftController],
  providers: [WedInvGiftService, WedInvGiftResolver],
  exports: [WedInvGiftService],
})
export class WedInvGiftModule {}
