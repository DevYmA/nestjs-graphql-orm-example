import { Resolver, Query, Mutation, Args, ResolveField, Parent } from '@nestjs/graphql';
import { Faculty } from 'src/faculty/entities/faculty.entity';
import { StudentCreateDTO } from './dto/create-student.input';
import { Student } from './entity/student.entity';
import { StudentService } from './student.service';

@Resolver(() => Student)
export class StudentResolver {

    constructor(private studentService: StudentService) { }

    @Query(() => [Student], { name: 'getAllStudent' })
    findAll() {
        return this.studentService.findAll();
    }

    @Mutation(() => Student, { name: 'createStudent' })
    create(@Args('studentInput') studentinput: StudentCreateDTO) {
        return this.studentService.create(studentinput);
    }

    @ResolveField(() => Faculty)
    facalty(@Parent() student:Student) : Promise<Faculty>{
        return this.studentService.getFaculty(student.facaltyId);
    }
}
