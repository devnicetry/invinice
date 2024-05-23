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
import { WedInvGiftWhereInput } from "./WedInvGiftWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { WedInvGiftOrderByInput } from "./WedInvGiftOrderByInput";

@ArgsType()
class WedInvGiftFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => WedInvGiftWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => WedInvGiftWhereInput, { nullable: true })
  @Type(() => WedInvGiftWhereInput)
  where?: WedInvGiftWhereInput;

  @ApiProperty({
    required: false,
    type: [WedInvGiftOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [WedInvGiftOrderByInput], { nullable: true })
  @Type(() => WedInvGiftOrderByInput)
  orderBy?: Array<WedInvGiftOrderByInput>;

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

export { WedInvGiftFindManyArgs as WedInvGiftFindManyArgs };
