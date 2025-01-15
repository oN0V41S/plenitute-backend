import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { CreateUserRequest } from './user-request.dto';

// Testing User Resources: Controller and Services
describe('Testing Controller && Testing Services -- User', () => {
  let controller: UserController;
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
    }).compile();

    controller = module.get<UserController>(UserController);
    service = module.get<UserService>(UserService);
  });

  describe('UserController', () => {
    describe('login', () => {
      it('should return a token', async () => {
        const createUserRequest: CreateUserRequest = {
          email: 'sucess',
          password: 'sucess',
        };

        jest
          .spyOn(service, 'login')
          .mockResolvedValue({ token: 'generated_token' });

        const result = await controller.login(createUserRequest);
        expect(result).toEqual({ token: 'generated_token' });
        expect(service.login).toHaveBeenCalledWith(createUserRequest);
      });
    });
  });

//   describe('UserService', () => {
//     describe('login', () => {
//       it('should generate a token', async () => {
//         const createUserRequest: CreateUserRequest = {
//           email: 'sucess',
//           password: 'sucess',
//         };

//         const result = await service.login(createUserRequest);
//         expect(result).toEqual({ token: 'generated_token' });
//       });
//     });
//   });
});
