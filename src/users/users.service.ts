import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { StatusEnum } from 'src/enums/status.enum';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) { }
  async create(createUserDto: CreateUserDto): Promise<CreateUserDto> {
    createUserDto.password = await bcrypt.hash(createUserDto.password, 10);
    const user = await this.userRepository.save(createUserDto);
    return user;
  }

  findAll() {
    return this.userRepository.find({ where: { status: StatusEnum.ACTIVE } });
  }

  findOne(id: number) {
    return this.userRepository.findOne({ where: { id } });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException('Usuário não encontrado ou já excluído');
    }
    await this.userRepository.update(user?.id, updateUserDto);
    return { message: 'Usuário atualizado com sucesso' };
  }

  async remove(id: number) {
    const result = await this.userRepository.update(id, { status: StatusEnum.DESACTIVE, deleted_at: new Date() });
    if (!result.affected) {
      throw new NotFoundException('Usuário não encontrado ou já excluído');
    }
    return { message: 'Usuário excluído com sucesso' };
  }
}
