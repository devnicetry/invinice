/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DtPaymentMethodWhereInput } from "./DtPaymentMethodWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { DtPaymentMethodOrderByInput } from "./DtPaymentMethodOrderByInput";

@ArgsType()
class DtPaymentMethodFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => DtPaymentMethodWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => DtPaymentMethodWhereInput, { nullable: true })
  @Type(() => DtPaymentMethodWhereInput)
  where?: DtPaymentMethodWhereInput;

  @ApiProperty({
    required: false,
    type: [DtPaymentMethodOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [DtPaymentMethodOrderByInput], { nullable: true })
  @Type(() => DtPaymentMethodOrderByInput)
  orderBy?: Array<DtPaymentMethodOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { DtPaymentMethodFindManyArgs as DtPaymentMethodFindManyArgs };