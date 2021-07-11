import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Student } from 'src/student/entity/student.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Faculty {

  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string
  
  @Field()
  @Column()
  name: string
  
  @Field({ nullable: true })
  @Column({ nullable: true })
  location: string

  @OneToMany(() => Student, student => student.facalty)
  @Field(() => [Student], {nullable: true})
  students: Student[]

}
