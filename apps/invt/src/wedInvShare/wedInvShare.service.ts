import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WedInvShareServiceBase } from "./base/wedInvShare.service.base";

@Injectable()
export class WedInvShareService extends WedInvShareServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
