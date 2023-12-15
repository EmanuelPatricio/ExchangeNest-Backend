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
exports.PrismaUserRepository = void 0;
const PrismaClientFactory_1 = require("../../../../../../src/Contexts/Shared/infrastructure/persistence/prisma/PrismaClientFactory");
const User_1 = require("../../domain/User");
const UserId_1 = require("../../../Shared/domain/Users/UserId");
const UserEmail_1 = require("../../domain/UserEmail");
const UserPassword_1 = require("../../domain/UserPassword");
const UserFirstName_1 = require("../../domain/UserFirstName");
const UserLastName_1 = require("../../domain/UserLastName");
const UserNIC_1 = require("../../domain/UserNIC");
const UserBirthDate_1 = require("../../domain/UserBirthDate");
const UserImage_1 = require("../../domain/UserImage");
class PrismaUserRepository {
    save(user) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            yield PrismaClientFactory_1.prisma.users.create({
                data: {
                    id: user.id.value,
                    first_name: user.firstName.value,
                    last_name: user.lastName.value,
                    nic: user.nic.value,
                    email: user.email.value,
                    password: user.password.value,
                    birth_date: user.birthDate.value,
                    user_image: ((_a = user.userImage) === null || _a === void 0 ? void 0 : _a.value) || null,
                    id_role: user.idRole,
                    id_user_status: user.idUserStatus,
                    id_country: user.idCountry,
                    created_on: user.createdOn,
                    created_by: user.createdBy.value,
                    last_modified_on: user.lastModifiedOn || null,
                    last_modified_by: user.lastModifiedBy || null
                }
            });
        });
    }
    login(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield PrismaClientFactory_1.prisma.users.findFirst({
                where: {
                    email: email.value,
                    password: password.value
                }
            });
            return user !== null ? new User_1.User(new UserId_1.UserId(user.id), new UserFirstName_1.UserFirstName(user.first_name), new UserLastName_1.UserLastName(user.last_name), new UserNIC_1.UserNIC(user.nic), new UserEmail_1.UserEmail(user.email), new UserPassword_1.UserPassword(user.password), new UserBirthDate_1.UserBirthDate(user.birth_date), user.user_image !== null ? new UserImage_1.UserImage(user.user_image) : null, user.id_role, user.id_user_status, user.id_country, user.created_on, new UserId_1.UserId(user.created_by), user.last_modified_on, user.last_modified_by) : null;
        });
    }
}
exports.PrismaUserRepository = PrismaUserRepository;
