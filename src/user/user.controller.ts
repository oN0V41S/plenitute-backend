import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserRequest } from './user-request.dto';
import {} from './user-request.dto'

@Controller('login')
export class UserController {
  constructor(private eventEmitter: EventEmitter2) {}

  @Post('login')
  login(@Body() createUserRequest: CreateUserRequest) {
    const loginEvent = await this.eventEmitter.emitter.asyncResult<LoginEvent>('login');
    return {
      userId: loginEvent.userId,
      status: loginEvent.status,
    };  
  }
}
