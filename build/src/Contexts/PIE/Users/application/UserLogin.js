"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserLogin = void 0;
const UserEmail_1 = require("../domain/UserEmail");
const UserPassword_1 = require("../domain/UserPassword");
const PasswordOperations_1 = require("./PasswordOperations");
class UserLogin {
    constructor(repository) {
        this.repository = repository;
    }
    run(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.repository.login(new UserEmail_1.UserEmail(request.email), new UserPassword_1.UserPassword((0, PasswordOperations_1.passwordEncrypted)(request.password)));
            return user
                ? {
                    id: user.id.value,
                    firstName: user.firstName.value,
                    lastName: user.lastName.value,
                    nic: user.nic.value,
                    email: user.email.value,
                    password: user.password.value,
                    birthDate: user.birthDate.value,
                    role: user.idRole.toString(),
                    status: user.idRole.toString(),
                    country: user.idRole.toString(),
                    token: ''
                }
                : null;
        });
    }
}
exports.UserLogin = UserLogin;
