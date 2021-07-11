import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateFacultyInput {
  
  @Field()
  name:string
  
  @Field({nullable:true})
  location:string
}
