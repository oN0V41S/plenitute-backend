import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from '../__service/user.service';

describe('Module: UserModule || UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService],
    }).compile();

    service = module.get<UserService>(UserService);
  });

    it('should generate a token', async () => {

    });
});
