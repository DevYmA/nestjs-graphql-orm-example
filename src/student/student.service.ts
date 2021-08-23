import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Faculty } from 'src/faculty/entities/faculty.entity';
import { FacultyService } from 'src/faculty/faculty.service';
import { Repository } from 'typeorm';
import { StudentCreateDTO } from './dto/create-student.input';
import { Student } from './entity/student.entity';

@Injectable()
export class StudentService {

    constructor(
        @InjectRepository(Student) private studentRepository: Repository<Student>,
        private facultyService:FacultyService
    ) { }

    async findAll(): Promise<Student[]> {
        return this.studentRepository.find();
    }

    async create(student: StudentCreateDTO): Promise<Student> {
        let studentTmp = this.studentRepository.create(student);
        return this.studentRepository.save(studentTmp);
    }

    async getFaculty(id: string): Promise<Faculty> {
        console.log(id);
        return this.facultyService.findOne(id);
    }
}
