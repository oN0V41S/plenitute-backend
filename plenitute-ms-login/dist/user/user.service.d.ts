import { CreateUserRequest } from './user-request.dto';
import { ClientProxy } from '@nestjs/microservices';
export declare class UserService {
    private readonly backEndClient;
    constructor(backEndClient: ClientProxy);
    login(createUserRequest: CreateUserRequest): Promise<{
        token: string;
    }>;
}
