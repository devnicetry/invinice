import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WedInvPresetServiceBase } from "./base/wedInvPreset.service.base";

@Injectable()
export class WedInvPresetService extends WedInvPresetServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
