import { Inject, Injectable } from '@nestjs/common';
import { CreateUserRequest } from './user-request.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class UserService {
  constructor(@Inject('MS-LOGIN') private readonly loginClient: ClientProxy) {}

  getHello() {
    return 'Welcome to /login Endpoint: you cant POST here.';
  }

  async login(createdUserRequest: CreateUserRequest): Promise<{token: string}> {
    console.info('Sending ', createdUserRequest, ' to Authentication - API');
    const response = await this.loginClient
      .send('login_authenticate', createdUserRequest)
      .toPromise();
    return response;
  }
}
