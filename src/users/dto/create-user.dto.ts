import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

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
    password: string;
}
