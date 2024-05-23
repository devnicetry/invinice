import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { WedInvPresetModuleBase } from "./base/wedInvPreset.module.base";
import { WedInvPresetService } from "./wedInvPreset.service";
import { WedInvPresetController } from "./wedInvPreset.controller";
import { WedInvPresetResolver } from "./wedInvPreset.resolver";

@Module({
  imports: [WedInvPresetModuleBase, forwardRef(() => AuthModule)],
  controllers: [WedInvPresetController],
  providers: [WedInvPresetService, WedInvPresetResolver],
  exports: [WedInvPresetService],
})
export class WedInvPresetModule {}
