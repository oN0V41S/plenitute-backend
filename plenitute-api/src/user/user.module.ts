import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: "MS-LOGIN",
        transport: Transport.TCP,
      },
    ])
  ],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
