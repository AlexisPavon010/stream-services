import { Controller, Get, Post, Body, Param, UseGuards, Res } from '@nestjs/common';

import { CreateUserDto, LoginUserDto, UpdateUserDto } from './dto';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from './decorator/get-user-decorator';
import { User } from './entities/user.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Get('verify')

  @UseGuards(AuthGuard())
  verify(@GetUser() user: User) {
    return user
  }

  @Get('users')
  @UseGuards(AuthGuard())
  getUser() {
    return this.authService.users();
  }

  @Post('register')
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.authService.create(createUserDto);
  }

  @Post('login')
  loginUser(@Body() loginUserDto: LoginUserDto) {
    return this.authService.login(loginUserDto);
  }

  @Post('update/:id')
  updateRole(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.authService.update(id, updateUserDto)
  }
}
