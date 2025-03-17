import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesModule } from './categories/categories.module';
import { CategoriesController } from './categories/categories.controller';
import { UsersModule } from './users/users.module';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { CategoriesService } from './categories/categories.service';
import { User } from './users/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '178.156.163.101',
      port: 5432,
      password: 'VPgXM4llyyAkcsW69CpaygBZpqIlGeDr45GLIQncEeIAykONec9Yze7aQEArHX3c',
      username: 'postgres',
      entities: [User],
      database: 'postgres',
      synchronize: false,
      logging: true,
    }),
    UsersModule,
    CategoriesModule,
  ],
  controllers: [UsersController, CategoriesController],
  providers: [UsersService, CategoriesService],
})
export class AppModule { }
