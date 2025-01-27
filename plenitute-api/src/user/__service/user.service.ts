import { Inject, Injectable } from '@nestjs/common';
import { UserRequest } from '../__events/userRequest.event';
import { ClientProxy } from '@nestjs/microservices';
import { UserLogs } from '../user-logs';

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

  async loginService(userRequest: UserRequest): Promise<any> {
    this.userLogs.UserModuleLog('Sending to MicroService:: ', userRequest)
    try{
      const response = this.loginClient.send('login_authenticate', userRequest);
      return response;
    }catch(e){
      console.log('Error: On sending message do MS-LOGIN || Module: UserModule ') 
      throw new Error("Microservice Error");
    }
  }
}
