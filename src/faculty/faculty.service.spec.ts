import { Test, TestingModule } from "@nestjs/testing";
import { getRepositoryToken } from "@nestjs/typeorm";
import { Faculty } from "src/faculty/entities/faculty.entity";
import { FacultyService } from "src/faculty/faculty.service";


describe('Student Service', () => {

    let studentService: FacultyService

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                FacultyService,
                {
                    provide: getRepositoryToken(Faculty),
                    useValue: {}
                },
                {
                    provide: FacultyService,
                    useValue: {}
                }
            ]
        }).compile();
        studentService = module.get<FacultyService>(FacultyService);
    });

    it('should be defined', () => {
        expect(studentService).toBeDefined();
    });

    it('should have create function', () => {
        expect(studentService.create).toBeDefined();
    });

    it('should have findAll function', () => {
        expect(studentService.findAll).toBeDefined();
    });

    it('should have findOne function', () => {
        expect(studentService.findOne).toBeDefined();
    });

    it('should have findOne remove', () => {
        expect(studentService.remove).toBeDefined();
    });

    it('should have findOne remove', () => {
        expect(studentService.update).toBeDefined();
    });

});