import { Injectable } from '@nestjs/common';
import { CreateBankDto } from './dto/create-bank.dto';
import { UpdateBankDto } from './dto/update-bank.dto';

@Injectable()
export class BanksService {
  create(createBankDto: CreateBankDto, file: Express.Multer.File) {
    console.log(createBankDto);
    console.log(file);
    return 'This action adds a new bank';
  }

  findAll() {
    return `This action returns all banks`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bank`;
  }

  update(id: number, updateBankDto: UpdateBankDto) {
    console.log(updateBankDto);
    return `This action updates a #${id} bank`;
  }

  remove(id: number) {
    return `This action removes a #${id} bank`;
  }
}
