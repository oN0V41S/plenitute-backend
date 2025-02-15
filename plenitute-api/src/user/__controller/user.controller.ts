import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from '../__service/user.service';
import { UserLogs } from '../user-logs';
import { UserRequest } from '../__events/userRequest.event';

@Controller('login')
export class UserController {
  constructor(
    private userService: UserService, 
    private userLogs: UserLogs
  ) { }

  @Get()
  getHello() {
    this.userLogs.UserModuleLog('Calling getHelloService to UserService');
    return this.userService.getHelloService();
  }

  @Post()
  login(@Body() userRequest: UserRequest) {
    this.userLogs.UserModuleLog('Sending to Controller');
    try{
      return this.userService.loginService(userRequest);
    }catch(e){
      const logMessage = {
        error: e,
        message: "Error on Comunicatte with MicroService"
      }
      return logMessage;
    }
  }
}
