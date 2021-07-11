import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFacultyInput } from './dto/create-faculty.input';
import { UpdateFacultyInput } from './dto/update-faculty.input';
import { Faculty } from './entities/faculty.entity';

@Injectable()
export class FacultyService {

  constructor(@InjectRepository(Faculty) private facultyRepository: Repository<Faculty>) { }

  create(faculty: CreateFacultyInput): Promise<Faculty> {
    let tem = this.facultyRepository.create(faculty);
    return this.facultyRepository.save(tem);
  }

  async findAll(): Promise<Faculty[]> {
    return this.facultyRepository.find(
      {
        relations: ["students"]
      }
    );
  }

  async findOne(id: string | number) :Promise<Faculty> {
    return this.facultyRepository.findOne(id);
  }

  update(id: number, updateFacultyInput: UpdateFacultyInput) {
    return `This action updates a #${id} faculty`;
  }

  remove(id: number) {
    return `This action removes a #${id} faculty`;
  }
}
