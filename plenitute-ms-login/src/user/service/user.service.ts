import { Inject, Injectable } from '@nestjs/common';
import { CreateUserRequest } from './user-request.dto';
import { ClientProxy } from '@nestjs/microservices';
import { UserLogs } from './user-logs';

@Injectable()
export class UserService {
  constructor(
    @Inject('backend') private readonly backEndClient: ClientProxy,
    private readonly userLogs: UserLogs
  ) { }

  async login(createUserRequest: CreateUserRequest): Promise<{token: string}> {
    this.userLogs.UserServiceLog('Recived data by API', createUserRequest);
    const token = 'generated_token';
    return { token };
  }
}
