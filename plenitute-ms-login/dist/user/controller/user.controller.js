"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const user_request_dto_1 = require("./user-request.dto");
const microservices_1 = require("@nestjs/microservices");
const user_logs_1 = require("../user-logs");
let UserController = class UserController {
    constructor(userService, userLogs) {
        this.userService = userService;
        this.userLogs = userLogs;
    }
    async login(createUserRequest) {
        this.userLogs.UserControllerLog('Sending data for UserService', createUserRequest);
        try {
            const token = await this.userService.login(createUserRequest);
            return token;
        }
        catch (e) {
            const errorMessage = { message: "Error on loading data on Microservice" };
            return errorMessage;
        }
    }
};
exports.UserController = UserController;
__decorate([
    (0, microservices_1.MessagePattern)('login_authenticate'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof user_request_dto_1.CreateUserRequest !== "undefined" && user_request_dto_1.CreateUserRequest) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "login", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)('login'),
    __metadata("design:paramtypes", [typeof (_a = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _a : Object, typeof (_b = typeof user_logs_1.UserLogs !== "undefined" && user_logs_1.UserLogs) === "function" ? _b : Object])
], UserController);
//# sourceMappingURL=user.controller.js.map