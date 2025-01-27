import { UserRequest } from '../__events/userRequest.event';
import { ClientProxy } from '@nestjs/microservices';
import { UserLogs } from '../user-logs';
export declare class UserService {
    private readonly backEndClient;
    private readonly userLogs;
    constructor(backEndClient: ClientProxy, userLogs: UserLogs);
    login(userRequest: UserRequest): Promise<{
        token: string;
    }>;
}
