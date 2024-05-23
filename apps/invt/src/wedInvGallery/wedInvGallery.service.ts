import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LocalStorageService } from "src/storage/providers/local/local.storage.service";
import { WedInvGalleryServiceBase } from "./base/wedInvGallery.service.base";

@Injectable()
export class WedInvGalleryService extends WedInvGalleryServiceBase {
  constructor(
    protected readonly prisma: PrismaService,
    protected readonly localStorageService: LocalStorageService
  ) {
    super(prisma, localStorageService);
  }
}
