import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';

describe('Testing AppController || Module: AppModule ', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  it('should return "Welcome to API for Plenitute."', () => {
    expect(appController.getHello()).toBe('Welcome to API for Plenitute.');
  });
});
