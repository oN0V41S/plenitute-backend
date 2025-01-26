import { Controller, } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserRequest } from './user-request.dto';
import { MessagePattern } from '@nestjs/microservices';
import { UserLogs } from '../user-logs';

@Controller('login')
export class UserController {
  constructor(private readonly userService: UserService, private readonly userLogs: UserLogs) { }

  // Comunicação via mensagem com API Principal
  @MessagePattern('login_authenticate')
  async login(createUserRequest: CreateUserRequest): Promise<any> {
    this.userLogs.UserControllerLog('Sending data for UserService', createUserRequest);
    try {
      const token = await this.userService.login(createUserRequest);
      return token;
    } catch (e) {
      const errorMessage = { message: "Error on loading data on Microservice" };
      return errorMessage;
    }
  }
}
