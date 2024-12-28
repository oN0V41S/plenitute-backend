import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserRequest } from './user-request.dto';

@Controller('login')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getHello(): string {
    return 'Bem vindo aos Endpoints de Login'
  }

  @Post('login')
  login(@Body() createUserRequest: Create): string {
    // return this.userService.
  }
}
