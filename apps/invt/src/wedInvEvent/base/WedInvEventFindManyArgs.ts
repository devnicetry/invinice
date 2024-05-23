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
import { WedInvEventWhereInput } from "./WedInvEventWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { WedInvEventOrderByInput } from "./WedInvEventOrderByInput";

@ArgsType()
class WedInvEventFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => WedInvEventWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => WedInvEventWhereInput, { nullable: true })
  @Type(() => WedInvEventWhereInput)
  where?: WedInvEventWhereInput;

  @ApiProperty({
    required: false,
    type: [WedInvEventOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [WedInvEventOrderByInput], { nullable: true })
  @Type(() => WedInvEventOrderByInput)
  orderBy?: Array<WedInvEventOrderByInput>;

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

export { WedInvEventFindManyArgs as WedInvEventFindManyArgs };
