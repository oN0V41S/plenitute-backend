import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AppController } from './__controller/app.controller';

@Module({
  imports: [UserModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
