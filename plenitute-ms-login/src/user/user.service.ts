import { Inject, Injectable } from '@nestjs/common';
import { CreateUserRequest } from './user-request.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class UserService {
  constructor(@Inject('backend') private readonly backEndClient: ClientProxy) { }

  async login(createUserRequest: CreateUserRequest): Promise<{token: string}> {
    console.log('User_Log - ', createUserRequest);
    const token = 'generated_token';
    return { token };
  }
}
