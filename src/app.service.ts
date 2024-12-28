import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {

  constructor(@Inject('LOGIN') private readonly loginClient: ClientProxy) {}
  
  getHello(): string {
    return 'Bem vindo a API do Plenitute.';
  }

  async login(createUserRequest: CreateUserRequest): Promise<CreateUserRequest> {
    this.loginClient.emit('validate-login')
    return createUserRequest;
  }

}
