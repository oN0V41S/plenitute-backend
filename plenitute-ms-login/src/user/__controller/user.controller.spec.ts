import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from '../user.controller';
import { UserService } from './user.service';
import { CreateUserRequest } from './user-request.dto';
import { ClientProxy } from '@nestjs/microservices';
import { of } from 'rxjs';

// Testing User Resources: Controller and Services
describe('Testing Controller && Testing Services -- User', () => {
  let controller: UserController;
  let service: UserService;
  // let backendClient: ClientProxy;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        UserService,
        {
          provide: 'backend',
          useValue: {
            send: jest.fn().mockReturnValue(of({ token: 'generated_token' })),
          },
        },
      ],
    }).compile();

    controller = module.get<UserController>(UserController);
    service = module.get<UserService>(UserService);
    backendClient = module.get<ClientProxy>('backend');
  });

  describe('UserController', () => {
    describe('login', () => {
      it('should return a token', async () => {
        const createUserRequest: CreateUserRequest = {
          email: 'success',
          password: 'success',
        };
  
        jest.spyOn(service, 'login').mockResolvedValue({ token: 'generated_token' });
  
        const result = await controller.login(createUserRequest);
        expect(result).toEqual({ token: 'generated_token' });
      });
    });
  });

  describe('UserService', () => {
    describe('login', () => {
      it('should generate a token', async () => {
        const createUserRequest: CreateUserRequest = {
          email: 'sucess',
          password: 'sucess',
        };

        const result = await service.login(createUserRequest);
        expect(result).toEqual({ token: 'generated_token' });
      });
    });
  });
});

