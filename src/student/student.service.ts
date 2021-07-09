import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StudentCreateDTO } from './dto/create-student.input';
import { Student } from './entity/student.entity';

@Injectable()
export class StudentService {

    constructor(@InjectRepository(Student) private studentRepository: Repository<Student>) { }

    async findAll(): Promise<Student[]> {
        return this.studentRepository.find();
    }

    async create(student:StudentCreateDTO):Promise<Student>{
        let studentTmp = this.studentRepository.create(student);
        return this.studentRepository.save(studentTmp);
    }
}
