import { Test, TestingModule } from "@nestjs/testing";
import { Student } from "./entity/student.entity";
import { StudentResolver } from "./student.resolver";
import { StudentService } from "./student.service";

describe('Student Resolver', () => {

    let resolver: StudentResolver;

    let studentMockService: StudentService;

    let createDto = new Student();
    createDto.firstName = "Rick";
    createDto.lastName = "Gremy";
    createDto.address = "LA";

    const studentService = {
        create: jest.fn((student) => {
            return {
                id: "test-id",
                ...createDto
            }
        })
    };

    beforeEach(async () => {
        let module: TestingModule = await Test.createTestingModule({
            providers: [
                StudentResolver,
                {
                    provide: StudentService,
                    useValue: studentService
                }
            ]
        }).compile();

        resolver = module.get<StudentResolver>(StudentResolver);
        studentMockService = module.get<StudentService>(StudentService);
    });

    it('should be defined', () => {
        expect(resolver).toBeDefined()
    });

    it('should have create function', () => {
        expect(resolver.create).toBeDefined();
    });

    it('should return created object in the databas', () => {
        expect(resolver.create(createDto)).toEqual({
            id: "test-id",
            ...createDto
        });
        expect(studentService.create).toBeCalled();
    });
});