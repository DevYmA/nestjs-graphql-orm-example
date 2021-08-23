import { Field, ObjectType } from "@nestjs/graphql"
import { Faculty } from "src/faculty/entities/faculty.entity"
import { Column, Entity, Generated, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"

@ObjectType()
@Entity()
export class Student {
    
    @Field()
    @PrimaryGeneratedColumn('uuid')
    id: string
    
    @Field()
    @Column()
    firstName: string
    
    @Field()
    @Column()
    lastName: string
    
    @Field({ nullable: true })
    @Column()
    address: string

    @ManyToOne(() => Faculty, faculty => faculty.students)
    @Field(() => Faculty)
    facalty?: Faculty

    @Column()
    @Field()
    facaltyId?: string
}