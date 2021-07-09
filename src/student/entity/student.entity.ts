import { Field, ObjectType } from "@nestjs/graphql"
import { Column, Entity, Generated, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"

@ObjectType()
@Entity()
export class Student{
    @Field()
    @PrimaryGeneratedColumn('uuid')
    id:string
    @Field()
    @Column()
    firstName: string
    @Field()
    @Column()
    lastName:string
    @Field({nullable:true})
    @Column()
    address:string
}