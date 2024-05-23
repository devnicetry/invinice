import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DtPaymentMethodService } from "./dtPaymentMethod.service";
import { DtPaymentMethodControllerBase } from "./base/dtPaymentMethod.controller.base";

@swagger.ApiTags("dtPaymentMethods")
@common.Controller("dtPaymentMethods")
export class DtPaymentMethodController extends DtPaymentMethodControllerBase {
  constructor(
    protected readonly service: DtPaymentMethodService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
