import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserRequest } from './user/user-request.dto';

@Injectable()
export class AppService {
  
  getHello(): string {
    return 'Bem vindo a API do Plenitute.';
  }
}
