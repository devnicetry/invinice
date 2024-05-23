import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { WedInvStoryModuleBase } from "./base/wedInvStory.module.base";
import { WedInvStoryService } from "./wedInvStory.service";
import { WedInvStoryController } from "./wedInvStory.controller";
import { WedInvStoryResolver } from "./wedInvStory.resolver";

@Module({
  imports: [WedInvStoryModuleBase, forwardRef(() => AuthModule)],
  controllers: [WedInvStoryController],
  providers: [WedInvStoryService, WedInvStoryResolver],
  exports: [WedInvStoryService],
})
export class WedInvStoryModule {}
