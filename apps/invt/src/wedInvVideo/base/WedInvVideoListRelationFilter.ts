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
import { WedInvVideoWhereInput } from "./WedInvVideoWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class WedInvVideoListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => WedInvVideoWhereInput,
  })
  @ValidateNested()
  @Type(() => WedInvVideoWhereInput)
  @IsOptional()
  @Field(() => WedInvVideoWhereInput, {
    nullable: true,
  })
  every?: WedInvVideoWhereInput;

  @ApiProperty({
    required: false,
    type: () => WedInvVideoWhereInput,
  })
  @ValidateNested()
  @Type(() => WedInvVideoWhereInput)
  @IsOptional()
  @Field(() => WedInvVideoWhereInput, {
    nullable: true,
  })
  some?: WedInvVideoWhereInput;

  @ApiProperty({
    required: false,
    type: () => WedInvVideoWhereInput,
  })
  @ValidateNested()
  @Type(() => WedInvVideoWhereInput)
  @IsOptional()
  @Field(() => WedInvVideoWhereInput, {
    nullable: true,
  })
  none?: WedInvVideoWhereInput;
}
export { WedInvVideoListRelationFilter as WedInvVideoListRelationFilter };
