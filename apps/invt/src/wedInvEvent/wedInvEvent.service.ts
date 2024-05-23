import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WedInvEventServiceBase } from "./base/wedInvEvent.service.base";

@Injectable()
export class WedInvEventService extends WedInvEventServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
