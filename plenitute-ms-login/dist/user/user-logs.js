"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserLogs = void 0;
class UserLogs {
    UserModuleLog(message, data) {
        if (data) {
            return console.log(`Log: ${message} || data:`, data, ` || Module: UserModule`);
        }
        else {
            return console.log(`Log: ${message} || Module: UserModule`);
        }
    }
    UserServiceLog(message, data) {
        if (data) {
            return console.log(`Log: ${message} || data:`, data, ` || Service: UserService`);
        }
        else {
            return console.log(`Log: ${message} || Service: UserService`);
        }
    }
    UserControllerLog(message, data) {
        if (data) {
            return console.log(`Log: ${message} || data:`, data, ` || Controller: UserController`);
        }
        else {
            return console.log(`Log: ${message} || Controller: UserController`);
        }
    }
}
exports.UserLogs = UserLogs;
//# sourceMappingURL=user-logs.js.map