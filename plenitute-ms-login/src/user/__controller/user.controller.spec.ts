import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from '../__service/user.service';
import { UserLogs } from '../user-logs';
import { UserRequest } from '../__events/userRequest.event';

describe('Module: UserModule || UserController', () => {
  let controller: UserController;
  let userService: UserService;
  let userLogs: UserLogs;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        { provide: UserService, useValue: { login: jest.fn().mockReturnValue({ token: 'generated_token' }) } },
        { provide: UserLogs, useValue: { UserControllerLog: jest.fn() } },
      ],
    }).compile();

    controller = module.get<UserController>(UserController);
    userService = module.get<UserService>(UserService);
    userLogs = module.get<UserLogs>(UserLogs);
  });

  describe('login', () => {
    it('should return a token', async () => {
      const userRequest: UserRequest = { email: 'testuser', password: 'testpassword' };
      const expectedResult = { token: 'generated_token' };

      const result = await controller.login(userRequest);

      expect(result).toEqual(expectedResult);
      expect(userService.login).toHaveBeenCalledWith(userRequest);
      expect(userLogs.UserControllerLog).toHaveBeenCalledWith('Sending data for UserService', userRequest);
    });

    // To-do: Create error unit test for validate throw errors.
  });
});