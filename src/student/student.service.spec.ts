import { Test, TestingModule } from "@nestjs/testing";
import { getRepositoryToken } from "@nestjs/typeorm";
import { Faculty } from "src/faculty/entities/faculty.entity";
import { FacultyService } from "src/faculty/faculty.service";
import { Student } from "./entity/student.entity";
import { StudentService } from "./student.service";

describe('Student Service', () => {

    let studentService: StudentService

    let studentcreateDto = new Student();
    studentcreateDto.firstName = "Rick";
    studentcreateDto.lastName = "Gremmy";
    studentcreateDto.address = "AU";

    let studentRepository = {
        create: jest.fn().mockImplementation((input) => input),
        save: jest.fn().mockImplementation((student) => {
            return Promise.resolve({
                id: "test-id",
                ...student
            });
        })
    };

    let facultyDto = new Faculty();
    facultyDto.location = "SA"; facultyDto.name = "BA"
    let facultyService = {
        findOne: jest.fn((id) => {
            return {
                id: id,
                ...facultyDto
            }
        })
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                StudentService,
                {
                    provide: getRepositoryToken(Student),
                    useValue: studentRepository
                },
                {
                    provide: FacultyService,
                    useValue: facultyService
                }
            ]
        }).compile();
        studentService = module.get<StudentService>(StudentService);
    });

    it('should be defined', () => {
        expect(studentService).toBeDefined();
    });

    it('should return faculty by the given id', async () => {
        let res = await studentService.getFaculty('test-id');
        expect(res.id).toEqual('test-id');
    });

    it('shoud create student', async () => {
        let result = await studentService.create(studentcreateDto);
        expect(result).toEqual({
            id: "test-id",
            ...studentcreateDto
        })
    });

    it('should retrive many result', async () => {
        // expect(ser).toEqual();s
    });

});