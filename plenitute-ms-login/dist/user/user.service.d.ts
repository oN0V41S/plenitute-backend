import { CreateUserRequest } from './user-request.dto';
import { ClientProxy } from '@nestjs/microservices';
export declare class UserService {
    private readonly backEndClient;
    private readonly users;
    constructor(backEndClient: ClientProxy);
    login(createUserRequest: CreateUserRequest): Promise<CreateUserRequest>;
}
