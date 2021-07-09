import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class StudentCreateDTO{

    @Field()
    firstName: string
    @Field()
    lastName:string
    @Field({nullable:true})
    address:string

}