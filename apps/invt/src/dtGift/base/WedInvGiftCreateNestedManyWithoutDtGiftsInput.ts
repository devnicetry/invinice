/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { WedInvGiftWhereUniqueInput } from "../../wedInvGift/base/WedInvGiftWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class WedInvGiftCreateNestedManyWithoutDtGiftsInput {
  @Field(() => [WedInvGiftWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [WedInvGiftWhereUniqueInput],
  })
  connect?: Array<WedInvGiftWhereUniqueInput>;
}

export { WedInvGiftCreateNestedManyWithoutDtGiftsInput as WedInvGiftCreateNestedManyWithoutDtGiftsInput };
