import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LocalStorageService } from "src/storage/providers/local/local.storage.service";
import { WedInvWeddingServiceBase } from "./base/wedInvWedding.service.base";

@Injectable()
export class WedInvWeddingService extends WedInvWeddingServiceBase {
  constructor(
    protected readonly prisma: PrismaService,
    protected readonly localStorageService: LocalStorageService
  ) {
    super(prisma, localStorageService);
  }
}
