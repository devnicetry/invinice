/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, IsEnum, ValidateNested } from "class-validator";
import { EnumDtPaymentMethodAccountType } from "./EnumDtPaymentMethodAccountType";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { WedInvPaymentCreateNestedManyWithoutDtPaymentMethodsInput } from "./WedInvPaymentCreateNestedManyWithoutDtPaymentMethodsInput";
import { Type } from "class-transformer";

@InputType()
class DtPaymentMethodCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  account?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  accountName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  accountNo?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumDtPaymentMethodAccountType,
  })
  @IsEnum(EnumDtPaymentMethodAccountType)
  @IsOptional()
  @Field(() => EnumDtPaymentMethodAccountType, {
    nullable: true,
  })
  accountType?: "EWallet" | "BankTransfer" | null;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  icon?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: () => WedInvPaymentCreateNestedManyWithoutDtPaymentMethodsInput,
  })
  @ValidateNested()
  @Type(() => WedInvPaymentCreateNestedManyWithoutDtPaymentMethodsInput)
  @IsOptional()
  @Field(() => WedInvPaymentCreateNestedManyWithoutDtPaymentMethodsInput, {
    nullable: true,
  })
  wedInvPayments?: WedInvPaymentCreateNestedManyWithoutDtPaymentMethodsInput;
}

export { DtPaymentMethodCreateInput as DtPaymentMethodCreateInput };