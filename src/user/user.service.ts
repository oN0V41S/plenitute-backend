import { Injectable } from '@nestjs/common';
import { CreateUserRequest } from './user-request.dto';

@Injectable()
export class UserService {
    
    login(createdUserRequest: CreateUserRequest) {
        
    }
}
