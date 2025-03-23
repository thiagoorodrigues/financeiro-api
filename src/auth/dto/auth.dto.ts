import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Matches, MinLength } from 'class-validator';

export class AuthDto {
  @ApiProperty({
    description: 'O nome do usuário',
    example: 'teste@teste.com.br',
  })
  @IsString({ message: 'Informe um email válido' })
  @IsEmail({}, { message: 'Informe um email válido' })
  email: string;

  @ApiProperty({
    description: 'A senha do usuário',
    example: 'A12@34480',
  })
  @IsString({ message: 'Informe uma senha válida' })
  @MinLength(6, { message: 'A senha deve ter no mínimo 6 caracteres' })
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/, {
    message: 'A senha deve conter letras minúsculas, maiúsculas e números',
  })
  password: string;
}
