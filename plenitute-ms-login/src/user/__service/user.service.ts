import { Inject, Injectable } from '@nestjs/common';
import { UserRequest } from '../__events/userRequest.event';
import { ClientProxy } from '@nestjs/microservices';
import { UserLogs } from '../user-logs';

@Injectable()
export class UserService {
  constructor(
    @Inject('backend') private readonly backEndClient: ClientProxy,
    private readonly userLogs: UserLogs
  ) { }

  async login(userRequest: UserRequest): Promise<{token: string}> {
    this.userLogs.UserServiceLog('Recived data by API', userRequest);
    const token = 'generated_token';
    return { token };
  }
}
