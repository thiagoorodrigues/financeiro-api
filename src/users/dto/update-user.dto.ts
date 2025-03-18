import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsEmail, IsOptional, IsString, Matches, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto extends PartialType(CreateUserDto) {
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
    @IsOptional()
    @IsString()
    @MinLength(6, { message: 'A senha deve ter no mínimo 6 caracteres' })
    @Matches(/^(?=.*[A-Za-z])(?=.*\d).+$/, {
      message: 'A senha deve conter pelo menos uma letra e um número',
    })
    password?: string;
}
