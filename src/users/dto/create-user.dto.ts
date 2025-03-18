import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Matches, MinLength } from 'class-validator';

export class CreateUserDto {
    @ApiProperty({
        description: 'O nome do usuário',
        example: 'João Silva',
    })
    @IsString()
    name: string;

    @ApiProperty({
        description: 'O nome do usuário',
        example: 'teste@teste.com.br',
    })
    @IsEmail()
    email: string;

    @ApiProperty({
        description: 'A senha do usuário',
        example: 'A12@34480'
    })
    @IsString()
    @MinLength(6, { message: 'A senha deve ter no mínimo 6 caracteres' })
    @Matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/, {
      message: 'A senha deve conter pelo menos uma letra e um número',
    })
    password: string;
}
