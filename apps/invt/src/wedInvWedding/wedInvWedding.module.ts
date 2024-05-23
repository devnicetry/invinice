import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { WedInvWeddingModuleBase } from "./base/wedInvWedding.module.base";
import { WedInvWeddingService } from "./wedInvWedding.service";
import { WedInvWeddingController } from "./wedInvWedding.controller";
import { WedInvWeddingResolver } from "./wedInvWedding.resolver";

@Module({
  imports: [WedInvWeddingModuleBase, forwardRef(() => AuthModule)],
  controllers: [WedInvWeddingController],
  providers: [WedInvWeddingService, WedInvWeddingResolver],
  exports: [WedInvWeddingService],
})
export class WedInvWeddingModule {}
