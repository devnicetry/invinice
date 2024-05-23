import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WedInvServiceBase } from "./base/wedInv.service.base";

@Injectable()
export class WedInvService extends WedInvServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
