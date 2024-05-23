import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { WedInvEventModuleBase } from "./base/wedInvEvent.module.base";
import { WedInvEventService } from "./wedInvEvent.service";
import { WedInvEventController } from "./wedInvEvent.controller";
import { WedInvEventResolver } from "./wedInvEvent.resolver";

@Module({
  imports: [WedInvEventModuleBase, forwardRef(() => AuthModule)],
  controllers: [WedInvEventController],
  providers: [WedInvEventService, WedInvEventResolver],
  exports: [WedInvEventService],
})
export class WedInvEventModule {}
