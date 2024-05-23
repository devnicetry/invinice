import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { WedInvPaymentService } from "./wedInvPayment.service";
import { WedInvPaymentControllerBase } from "./base/wedInvPayment.controller.base";

@swagger.ApiTags("wedInvPayments")
@common.Controller("wedInvPayments")
export class WedInvPaymentController extends WedInvPaymentControllerBase {
  constructor(
    protected readonly service: WedInvPaymentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
