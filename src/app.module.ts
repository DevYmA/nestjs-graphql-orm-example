import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { StudentModule } from './student/student.module';
import { FacultyModule } from './faculty/faculty.module';

@Module({
  imports: [
    GraphQLModule.forRoot(
      { autoSchemaFile: join(process.cwd(), 'src/gql-schema.gql'), }
    ),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'student',
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true,
    }),
    StudentModule,
    FacultyModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
