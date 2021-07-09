import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { FacultyService } from './faculty.service';
import { Faculty } from './entities/faculty.entity';
import { CreateFacultyInput } from './dto/create-faculty.input';
import { UpdateFacultyInput } from './dto/update-faculty.input';

@Resolver(() => Faculty)
export class FacultyResolver {
  constructor(private readonly facultyService: FacultyService) {}

  @Mutation(() => Faculty)
  createFaculty(@Args('createFacultyInput') createFacultyInput: CreateFacultyInput) {
    return this.facultyService.create(createFacultyInput);
  }

  @Query(() => [Faculty], { name: 'faculty' })
  findAll() {
    return this.facultyService.findAll();
  }

  @Query(() => Faculty, { name: 'faculty' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.facultyService.findOne(id);
  }

  @Mutation(() => Faculty)
  updateFaculty(@Args('updateFacultyInput') updateFacultyInput: UpdateFacultyInput) {
    return this.facultyService.update(updateFacultyInput.id, updateFacultyInput);
  }

  @Mutation(() => Faculty)
  removeFaculty(@Args('id', { type: () => Int }) id: number) {
    return this.facultyService.remove(id);
  }
}
