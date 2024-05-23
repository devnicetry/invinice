import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { WedInvModuleBase } from "./base/wedInv.module.base";
import { WedInvService } from "./wedInv.service";
import { WedInvController } from "./wedInv.controller";
import { WedInvResolver } from "./wedInv.resolver";

@Module({
  imports: [WedInvModuleBase, forwardRef(() => AuthModule)],
  controllers: [WedInvController],
  providers: [WedInvService, WedInvResolver],
  exports: [WedInvService],
})
export class WedInvModule {}
