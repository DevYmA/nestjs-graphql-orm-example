import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentResolver } from './student.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './entity/student.entity';
import { FacultyModule } from 'src/faculty/faculty.module';

@Module({
  imports:[TypeOrmModule.forFeature([Student]), FacultyModule],
  providers: [StudentService, StudentResolver]
})
export class StudentModule {}
