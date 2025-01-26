export class UserLogs {
    UserModuleLog(message: string, data?: any) {
        if (data!) {
            return console.log(`Log: ${message} || data:`, data,` || Module: UserModule`)
        }
        else {
            return console.log(`Log: ${message} || Module: UserModule`)
        }
    }

    UserServiceLog(message: string, data?: any) {
        if (data!) {
            return console.log(`Log: ${message} || data:`, data,` || Service: UserService`)
        }
        else {
            return console.log(`Log: ${message} || Service: UserService`)
        }
    }

    UserControllerLog(message: string, data?: any) {
        if (data!) {
            return console.log(`Log: ${message} || data:`, data,` || Controller: UserController`)
        }
        else {
            return console.log(`Log: ${message} || Controller: UserController`)
        }
    }
}