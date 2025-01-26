import { Module } from '@nestjs/common';
import { UserController } from './controller/user.controller';
import { UserService } from './user.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { UserLogs } from './service/user-logs';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: "backend",
        transport: Transport.TCP,
        options: {
          port: 3000,
        },
      },
    ])
  ],
  controllers: [UserController],
  providers: [UserService, UserLogs],
})
export class UserModule { }
