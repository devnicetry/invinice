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
import { Type } from "class-transformer";

@ArgsType()
class WedInvEventCountArgs {
  @ApiProperty({
    required: false,
    type: () => WedInvEventWhereInput,
  })
  @Field(() => WedInvEventWhereInput, { nullable: true })
  @Type(() => WedInvEventWhereInput)
  where?: WedInvEventWhereInput;
}

export { WedInvEventCountArgs as WedInvEventCountArgs };
