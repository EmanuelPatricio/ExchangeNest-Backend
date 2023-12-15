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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUserRepository = void 0;
const bson_1 = require("bson");
const fs_1 = __importDefault(require("fs"));
const User_1 = require("../../domain/User");
const path_1 = __importDefault(require("path"));
class FileUserRepository {
    constructor() {
        this.FILE_PATH = path_1.default.join(__dirname, 'users').replace(/\\/g, '/');
    }
    save(user) {
        return __awaiter(this, void 0, void 0, function* () {
            yield fs_1.default.promises.writeFile(this.filePath(user.id.value), (0, bson_1.serialize)(user));
        });
    }
    search(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const userData = yield fs_1.default.promises.readFile(this.filePath(userId));
            const { id, firstName, lastName, nic, email, password, birthDate, userImage, idRole, idUserStatus, idCountry, createdOn, createdBy, lastModifiedOn, lastModifiedBy } = (0, bson_1.deserialize)(userData);
            return new User_1.User(id, firstName, lastName, nic, email, password, birthDate, userImage, idRole, idUserStatus, idCountry, createdOn, createdBy, lastModifiedOn, lastModifiedBy);
        });
    }
    login(_email, _password) {
        return __awaiter(this, void 0, void 0, function* () {
            // const userData = await fs.promises.readFile(this.filePath(userId));
            // const { id, firstName, lastName, nic, email, password, birthDate, userImage, idRole, idUserStatus, idCountry, createdOn, createdBy, lastModifiedOn, lastModifiedBy } = deserialize(userData);
            // return new User(id, firstName, lastName, nic, email, password, birthDate, userImage, idRole, idUserStatus, idCountry, createdOn, createdBy, lastModifiedOn, lastModifiedBy);
            return null;
        });
    }
    filePath(id) {
        return `${this.FILE_PATH}.${id}.repo`;
    }
}
exports.FileUserRepository = FileUserRepository;
