import { UserService } from './user.service';
import { CreateUserRequest } from './user-request.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    login(createUserRequest: CreateUserRequest): Promise<{
        token: string;
    }>;
}
