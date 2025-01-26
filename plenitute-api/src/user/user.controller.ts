import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserLogs } from './user-logs';
import { CreateUserRequest } from './user-request.dto';

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
  login(@Body() createUserRequest: CreateUserRequest) {
    this.userLogs.UserModuleLog('Sending to Controller');
    try{
      return this.userService.loginService(createUserRequest);
    }catch(e){
      const logMessage = {
        error: e,
        message: "Error on Comunicatte with MicroService"
      }
      return logMessage;
    }
  }
}
