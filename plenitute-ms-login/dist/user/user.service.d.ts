import { CreateUserRequest } from './user-request.dto';
import { ClientProxy } from '@nestjs/microservices';
import { UserLogs } from './user-logs';
export declare class UserService {
    private readonly backEndClient;
    private readonly userLogs;
    constructor(backEndClient: ClientProxy, userLogs: UserLogs);
    login(createUserRequest: CreateUserRequest): Promise<{
        token: string;
    }>;
}
