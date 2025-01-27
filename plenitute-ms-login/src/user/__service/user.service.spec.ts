import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from '../__service/user.service';
import { UserLogs } from '../user-logs';
import { UserRequest } from '../__events/userRequest.event';
import { ClientProxy } from '@nestjs/microservices';
import { of } from 'rxjs';

describe('Module: UserModule || UserService', () => {
  let service: UserService;
  let userLogs: UserLogs;
  let backEndClient: ClientProxy;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService, UserLogs, { provide: 'backend', useValue: { send: jest.fn().mockReturnValue(of({ token: 'generated_token' })) } }],
    }).compile();

    service = module.get<UserService>(UserService);
    userLogs = module.get<UserLogs>(UserLogs);
    backEndClient = module.get<ClientProxy>('backend');
  });

    it('should generate a token', async () => {
      const userRequest: UserRequest = { email: 'testuser', password: 'testpassword' };
      const result = await service.login(userRequest);
      expect(result).toEqual({ token: 'generated_token' });
      // expect(backEndClient.send).toHaveBeenCalledWith('backend_login', userRequest);
    });
});