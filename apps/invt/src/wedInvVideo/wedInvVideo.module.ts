import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { WedInvVideoModuleBase } from "./base/wedInvVideo.module.base";
import { WedInvVideoService } from "./wedInvVideo.service";
import { WedInvVideoController } from "./wedInvVideo.controller";
import { WedInvVideoResolver } from "./wedInvVideo.resolver";

@Module({
  imports: [WedInvVideoModuleBase, forwardRef(() => AuthModule)],
  controllers: [WedInvVideoController],
  providers: [WedInvVideoService, WedInvVideoResolver],
  exports: [WedInvVideoService],
})
export class WedInvVideoModule {}
