import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserRequest } from './user-request.dto';
import { EventPattern, MessagePattern } from '@nestjs/microservices';

@Controller('login')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @MessagePattern('login_authenticate')
  async login(createUserRequest: CreateUserRequest): Promise<{token: string}> {
    const response = await this.userService.login(createUserRequest);
    return response;
  }
}
