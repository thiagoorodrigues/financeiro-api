import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  UseGuards,
} from '@nestjs/common';
import { BanksService } from './banks.service';
import { CreateBankDto } from './dto/create-bank.dto';
import { UpdateBankDto } from './dto/update-bank.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  ApiBearerAuth,
  ApiBody,
  ApiConsumes,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiTags('Banks')
@ApiBearerAuth()
@Controller('banks')
export class BanksController {
  constructor(private readonly banksService: BanksService) {}

  @ApiOperation({ summary: 'Cadastrar novo usuário.' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'Criação de banco com upload de imagem',
    schema: {
      type: 'object',
      properties: {
        name: { type: 'string', example: 'Banco XPTO' },
        code: { type: 'string', example: '123' },
        file: {
          type: 'string',
          format: 'binary',
        },
      },
      required: ['name', 'code', 'file'],
    },
  })
  @UseGuards(JwtAuthGuard)
  @Post()
  @UseInterceptors(FileInterceptor('file'))
  create(
    @Body() createBankDto: CreateBankDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.banksService.create(createBankDto, file);
  }

  @Get()
  findAll() {
    return this.banksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.banksService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBankDto: UpdateBankDto) {
    return this.banksService.update(+id, updateBankDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.banksService.remove(+id);
  }
}
