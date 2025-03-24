import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateBankDto {
  @ApiProperty({
    description: 'Nome do banco',
    example: 'Banco',
  })
  @IsString({ message: 'Informe um nome válido' })
  name: string;

  @ApiProperty({
    description: 'Código do banco',
    example: '000',
  })
  @IsString({ message: 'Informe um nome válido' })
  code: string;
}
