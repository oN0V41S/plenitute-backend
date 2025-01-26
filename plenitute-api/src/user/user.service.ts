import { Inject, Injectable } from '@nestjs/common';
import { CreateUserRequest } from './user-request.dto';
import { ClientProxy } from '@nestjs/microservices';
import { UserLogs } from './user-logs';

@Injectable()
export class UserService {
  constructor(
    @Inject('mslogin') private readonly loginClient: ClientProxy, 
    private readonly userLogs: UserLogs
  ) {}

  getHelloService() {
    this.userLogs.UserModuleLog('Returning getHelloService to UserController')
    return 'Welcome to /login Endpoint: you cant POST here.';
  }

  async loginService(createdUserRequest: CreateUserRequest): Promise<any> {
    this.userLogs.UserModuleLog('Sending to MicroService:: ', createdUserRequest)
    try{
      const response = this.loginClient.send('login_authenticate', createdUserRequest);
      return response;
    }catch(e){
      console.log('Error: On sending message do MS-LOGIN || Module: UserModule ') 
      throw new Error("Microservice Error");
    }
  }
}
