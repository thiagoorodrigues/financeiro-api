import { Module } from '@nestjs/common';
import { BanksService } from './banks.service';
import { BanksController } from './banks.controller';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bank } from './entities/bank.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Bank]),
    MulterModule.register({
      dest: './upload/flags-banks',
    }),
  ],
  controllers: [BanksController],
  providers: [BanksService],
  exports: [TypeOrmModule, MulterModule],
})
export class BanksModule {}
