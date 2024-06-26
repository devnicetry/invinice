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
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, IsEnum, ValidateNested } from "class-validator";
import { EnumDtPaymentMethodAccountType } from "./EnumDtPaymentMethodAccountType";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { WedInvPaymentListRelationFilter } from "../../wedInvPayment/base/WedInvPaymentListRelationFilter";

@InputType()
class DtPaymentMethodWhereInput {
  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  account?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  accountName?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  accountNo?: StringNullableFilter;

  @ApiProperty({
    required: false,
    enum: EnumDtPaymentMethodAccountType,
  })
  @IsEnum(EnumDtPaymentMethodAccountType)
  @IsOptional()
  @Field(() => EnumDtPaymentMethodAccountType, {
    nullable: true,
  })
  accountType?: "EWallet" | "BankTransfer";

  @ApiProperty({
    required: false,
    type: JsonFilter,
  })
  @Type(() => JsonFilter)
  @IsOptional()
  @Field(() => JsonFilter, {
    nullable: true,
  })
  icon?: JsonFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => WedInvPaymentListRelationFilter,
  })
  @ValidateNested()
  @Type(() => WedInvPaymentListRelationFilter)
  @IsOptional()
  @Field(() => WedInvPaymentListRelationFilter, {
    nullable: true,
  })
  wedInvPayments?: WedInvPaymentListRelationFilter;
}

export { DtPaymentMethodWhereInput as DtPaymentMethodWhereInput };
