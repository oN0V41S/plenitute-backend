import { UserService } from '../__service/user.service';
import { UserRequest } from '../__events/userRequest.event';
import { UserLogs } from '../user-logs';
export declare class UserController {
    private readonly userService;
    private readonly userLogs;
    constructor(userService: UserService, userLogs: UserLogs);
    login(userRequest: UserRequest): Promise<any>;
}
