import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserRequest } from './user-request.dto';
import { EventPattern, MessagePattern } from '@nestjs/microservices';

@Controller('login')
export class UserController {
  constructor(private readonly userService: UserService) { }

  // Comunicação via mensagem com API Principal
  @MessagePattern('login_authenticate')
  async login(createUserRequest: CreateUserRequest): Promise<{token: string}> {
    const token = await this.userService.login(createUserRequest);
    return token;
  }
}
