import { Test, TestingModule } from "@nestjs/testing";
import { Faculty } from "src/faculty/entities/faculty.entity";
import { StudentCreateDTO } from "./dto/create-student.input";
import { Student } from "./entity/student.entity";
import { StudentResolver } from "./student.resolver";
import { StudentService } from "./student.service";

describe('Student Resolver', () => {

    let resolver: StudentResolver;

    let studentMockService: StudentService;

    let studentMockData: Student[] = [
        {
            firstName: "Rick",
            lastName: "Gremmy",
            address: "LA",
            id: "test-id-1"
        },
        {
            firstName: "Daral",
            lastName: "Merch",
            address: "AU",
            id: "test-id-2"
        }
    ];

    let createDto = new StudentCreateDTO();
    createDto.firstName = "Rick";
    createDto.lastName = "Gremy";
    createDto.address = "LA";

    let faculty = new Faculty();
    faculty.id = "test-fac-id";
    faculty.location = "AU";
    faculty.name = "New Vells";

    const studentService = {
        create: jest.fn((student) => {
            return {
                id: "test-id",
                ...createDto
            }
        }),
        findAll: jest.fn().mockImplementation(() => Promise.resolve(studentMockData)),
        getFaculty: jest.fn().mockImplementation((student) => Promise.resolve(faculty))
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

    it('should return created object in the database', () => {
        expect(resolver.create(createDto)).toEqual({
            id: "test-id",
            ...createDto
        });
        expect(studentMockService.create).toBeCalled();
    });

    it('should have findAll function', () => {
        expect(resolver.findAll).toBeDefined();
    });

    it('should have return multiple students', async () => {
        expect(await resolver.findAll()).toEqual([
            {
                firstName: "Rick",
                lastName: "Gremmy",
                address: "LA",
                id: "test-id-1"
            },
            {
                firstName: "Daral",
                lastName: "Merch",
                address: "AU",
                id: "test-id-2"
            }
        ]);
        expect(studentMockService.findAll).toBeCalled()
    });

    it('should have faculty resolve function', () => {
        expect(resolver.facalty).toBeDefined();
    });

    it('should have return faculty by student', async () => {
        expect(await resolver.facalty(studentMockData[0])).toEqual(
            faculty
        );
        expect(studentMockService.getFaculty).toBeCalled();
    });
});