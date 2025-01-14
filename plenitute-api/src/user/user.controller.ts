import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserRequest } from './user-request.dto';
import { EventPattern } from '@nestjs/microservices';

@Controller('login')
export class UserController {
  constructor(private userService: UserService) {}
  
  @Get()
  getHello(){
    return this.userService.getHello();
  }

  @Post()
  login(@Body() createUserRequest: CreateUserRequest) {
    return this.userService.login(createUserRequest);
  }
}
