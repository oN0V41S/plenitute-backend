import { Inject, Injectable } from '@nestjs/common';
import { CreateUserRequest } from './user-request.dto';
import { UserResponseEvent } from './user-response.envent';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class UserService {
  private readonly users: CreateUserRequest[] = [];

  constructor(@Inject('backend') private readonly backEndClient: ClientProxy) { }

  async login(createUserRequest: CreateUserRequest): Promise<CreateUserRequest> {
    console.log('User_Log - ', createUserRequest)
    // Implementar Banco de Dados e Repositório com Postgress e TypeORM
    return createUserRequest
  }
}
