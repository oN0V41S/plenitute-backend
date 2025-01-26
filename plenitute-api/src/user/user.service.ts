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

  async loginService(createdUserRequest: CreateUserRequest): Promise<{token: string}> {
    this.userLogs.UserModuleLog('Sending to MicroService:: ', createdUserRequest)
    console.info( ' || Module: UserModule');
    try{
      const response = await this.loginClient
        .send('login_authenticate', createdUserRequest)
        .toPromise();
      return response;
    }catch(e){
      console.log(' Error: On sending message do MS-LOGIN || \n Module: UserModule ') 
      throw new Error("Microservice Error");
    }
  }
}
