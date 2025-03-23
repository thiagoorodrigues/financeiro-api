import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthRegisterDto } from './dto/auth.register.dto';
import { UsersService } from 'src/users/users.service';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UsersService,
  ) {}

  @ApiOperation({ summary: 'Login' })
  @Post('login')
  signIn(@Body() signInDto: AuthDto) {
    return this.authService.signIn(signInDto.email, signInDto.password);
  }

  @ApiOperation({ summary: 'Logout usuário.' })
  @Post('logout')
  signOut() {
    return 'You have been logged out';
  }

  @ApiOperation({ summary: 'Cadastrar novo usuário' })
  @Post('register')
  signUp(@Body() signUpDto: AuthRegisterDto) {
    return this.userService.create(signUpDto);
  }
}
