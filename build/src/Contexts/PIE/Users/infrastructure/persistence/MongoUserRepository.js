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
exports.MongoUserRepository = void 0;
const MongoRepository_1 = require("../../../../Shared/infrastructure/persistence/mongo/MongoRepository");
const User_1 = require("../../domain/User");
;
class MongoUserRepository extends MongoRepository_1.MongoRepository {
    save(user) {
        return this.persist(user.id.value, user);
    }
    search(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const collection = yield this.collection();
            const document = yield collection.findOne({ id: id.value });
            return document ? User_1.User.fromPrimitives({
                id: document.id,
                firstName: document.firstName,
                lastName: document.lastName,
                nic: document.nic,
                email: document.email,
                password: document.password,
                birthDate: document.birthDate,
                image: document.userImage,
                role: document.idRole,
                status: document.idUserStatus,
                country: document.idCountry,
                createdOn: document.createdOn,
                createdBy: document.createdBy,
                lastModifiedOn: document.lastModifiedOn,
                lastModifiedBy: document.lastModifiedBy
            }) : null;
        });
    }
    login(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const collection = yield this.collection();
            const document = yield collection.findOne({ email: email.value, password: password.value });
            return document ? User_1.User.fromPrimitives({
                id: document.id,
                firstName: document.firstName,
                lastName: document.lastName,
                nic: document.nic,
                email: document.email,
                password: document.password,
                birthDate: document.birthDate,
                image: document.userImage,
                role: document.idRole,
                status: document.idUserStatus,
                country: document.idCountry,
                createdOn: document.createdOn,
                createdBy: document.createdBy,
                lastModifiedOn: document.lastModifiedOn,
                lastModifiedBy: document.lastModifiedBy
            }) : null;
        });
    }
    collectionName() {
        return 'users';
    }
}
exports.MongoUserRepository = MongoUserRepository;
