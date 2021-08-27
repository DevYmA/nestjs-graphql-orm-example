import { Test, TestingModule } from "@nestjs/testing";
import { Faculty } from "src/faculty/entities/faculty.entity";
import { FacultyResolver } from "./faculty.resolver";
import { FacultyService } from "./faculty.service";


describe('Faculty Resolver', () => {

    let resolver: FacultyResolver;

    let facultyServiceMock: FacultyService;

    beforeEach(async () => {
        let module: TestingModule = await Test.createTestingModule({
            providers: [
                FacultyResolver,
                {
                    provide: FacultyService,
                    useValue: {}
                }
            ]
        }).compile();

        resolver = module.get<FacultyResolver>(FacultyResolver);
        facultyServiceMock = module.get<FacultyService>(FacultyService);
    });

    it('should be defined', () => {
        expect(resolver).toBeDefined()
    });

    it('should have create function', () => {
        expect(resolver.createFaculty).toBeDefined();
    });

    it('should have findAll function', () => {
        expect(resolver.findAll).toBeDefined();
    });

    it('should have findOne function', () => {
        expect(resolver.findOne).toBeDefined();
    });

    it('should have removeFaculty function', () => {
        expect(resolver.removeFaculty).toBeDefined();
    });

    it('should have updateFaculty function', () => {
        expect(resolver.updateFaculty).toBeDefined();
    });


});