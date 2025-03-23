import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesModule } from './categories/categories.module';
import { CategoriesController } from './categories/categories.controller';
import { UsersModule } from './users/users.module';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { CategoriesService } from './categories/categories.service';
import { User } from './users/entities/user.entity';
import { AuthModule } from './auth/auth.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { BanksModule } from './banks/banks.module';
import { BankAccountsModule } from './bank-accounts/bank-accounts.module';
import { TransactionsModule } from './transactions/transactions.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '178.156.163.101',
      port: 3306,
      password:
        'YgMhCx3RW0YZEVHk1Udr68KAc3hVfqfVBh0Mm0LMqP4IXgUyer3BBcBKdSQQhV9J',
      username: 'mysql',
      entities: [User],
      database: 'default',
      synchronize: false,
      logging: true,
    }),
    UsersModule,
    CategoriesModule,
    AuthModule,
    BanksModule,
    BankAccountsModule,
    TransactionsModule,
  ],
  controllers: [UsersController, CategoriesController, AuthController],
  providers: [UsersService, CategoriesService, AuthService],
})
export class AppModule {}
