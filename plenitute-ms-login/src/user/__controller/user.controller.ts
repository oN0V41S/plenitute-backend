import { Controller, } from '@nestjs/common';
import { UserService } from '../__service/user.service';
import { UserRequest } from '../__events/userRequest.event';
import { MessagePattern } from '@nestjs/microservices';
import { UserLogs } from '../user-logs';

@Controller('login')
export class UserController {
  constructor(private readonly userService: UserService, private readonly userLogs: UserLogs) { }

  // Comunicação via mensagem com API Principal
  @MessagePattern('login_authenticate')
  async login(userRequest: UserRequest): Promise<any> {
    this.userLogs.UserControllerLog('Sending data for UserService', userRequest);
    try {
      const token = await this.userService.login(userRequest);
      return token;
    } catch (e) {
      const errorMessage = { message: "Error on loading data on Microservice" };
      return errorMessage;
    }
  }
}
