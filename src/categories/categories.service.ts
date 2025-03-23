import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { StatusEnum } from 'src/enums/status.enum';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private readonly categoriesRepository: Repository<Category>,
  ) {}
  async create(createCategoryDto: CreateCategoryDto) {
    await this.categoriesRepository.save(createCategoryDto);
    return { message: 'Categoria cadastrada com sucesso!' };
  }

  findAll() {
    return this.categoriesRepository.find({
      where: { status: StatusEnum.ACTIVE },
    });
  }

  findOne(id: number) {
    return this.categoriesRepository.findOne({
      where: { id: id, status: StatusEnum.ACTIVE },
    });
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    await this.categoriesRepository.update(id, updateCategoryDto);
    return { message: 'Categoria atualizada com sucesso!' };
  }

  async remove(id: number) {
    await this.categoriesRepository.update(id, {
      status: StatusEnum.DESACTIVE,
    });
    return { message: 'Categoria removida com sucesso!' };
  }
}
