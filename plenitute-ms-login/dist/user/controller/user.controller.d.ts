import { UserService } from './user.service';
import { CreateUserRequest } from './user-request.dto';
import { UserLogs } from '../user-logs';
export declare class UserController {
    private readonly userService;
    private readonly userLogs;
    constructor(userService: UserService, userLogs: UserLogs);
    login(createUserRequest: CreateUserRequest): Promise<any>;
}
