import { Module } from '@nestjs/common';
import { UserController } from './__controller/user.controller';
import { UserService } from './__service/user.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { UserLogs } from './user-logs';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'mslogin',
        transport: Transport.TCP,
      },
    ]),
  ],
  controllers: [UserController],
  providers: [UserService, UserLogs]
})
export class UserModule {}
