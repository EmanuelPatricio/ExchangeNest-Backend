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
exports.UserCreator = void 0;
const UserId_1 = require("../../Shared/domain/Users/UserId");
const User_1 = require("../domain/User");
const UserBirthDate_1 = require("../domain/UserBirthDate");
const UserEmail_1 = require("../domain/UserEmail");
const UserFirstName_1 = require("../domain/UserFirstName");
const UserImage_1 = require("../domain/UserImage");
const UserLastName_1 = require("../domain/UserLastName");
const UserNIC_1 = require("../domain/UserNIC");
const UserPassword_1 = require("../domain/UserPassword");
const PasswordOperations_1 = require("./PasswordOperations");
class UserCreator {
    constructor(repository) {
        this.repository = repository;
    }
    run(request) {
        return __awaiter(this, void 0, void 0, function* () {
            request.password = (0, PasswordOperations_1.passwordEncrypted)(request.password);
            const user = new User_1.User(new UserId_1.UserId(request.id), new UserFirstName_1.UserFirstName(request.firstName), new UserLastName_1.UserLastName(request.lastName), new UserNIC_1.UserNIC(request.nic), new UserEmail_1.UserEmail(request.email), new UserPassword_1.UserPassword(request.password), new UserBirthDate_1.UserBirthDate(request.birthDate), request.image === null ? null : new UserImage_1.UserImage(request.image), request.idRole, request.idUserStatus, request.idCountry, new Date(request.createdOn), new UserId_1.UserId(request.id), null, null);
            return this.repository.save(user);
        });
    }
}
exports.UserCreator = UserCreator;
