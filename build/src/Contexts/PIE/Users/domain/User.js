"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const AggregateRoot_1 = require("../../../Shared/domain/AggregateRoot");
const UserId_1 = require("../../Shared/domain/Users/UserId");
const UserBirthDate_1 = require("./UserBirthDate");
const UserEmail_1 = require("./UserEmail");
const UserFirstName_1 = require("./UserFirstName");
const UserImage_1 = require("./UserImage");
const UserLastName_1 = require("./UserLastName");
const UserNIC_1 = require("./UserNIC");
const UserPassword_1 = require("./UserPassword");
class User extends AggregateRoot_1.AggregateRoot {
    constructor(id, firstName, lastName, nic, email, password, birthDate, userImage, idRole, idUserStatus, idCountry, createdOn, createdBy, lastModifiedOn, lastModifiedBy) {
        super();
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.nic = nic;
        this.email = email;
        this.password = password;
        this.birthDate = birthDate;
        this.userImage = userImage;
        this.idRole = idRole;
        this.idUserStatus = idUserStatus;
        this.idCountry = idCountry;
        this.createdOn = createdOn;
        this.createdBy = createdBy;
        this.lastModifiedOn = lastModifiedOn;
        this.lastModifiedBy = lastModifiedBy;
    }
    static fromPrimitives(plainData) {
        return new User(new UserId_1.UserId(plainData.id), new UserFirstName_1.UserFirstName(plainData.firstName), new UserLastName_1.UserLastName(plainData.lastName), new UserNIC_1.UserNIC(plainData.nic), new UserEmail_1.UserEmail(plainData.email), new UserPassword_1.UserPassword(plainData.password), new UserBirthDate_1.UserBirthDate(plainData.birthDate), plainData.image !== null ? new UserImage_1.UserImage(plainData.image) : null, plainData.role, plainData.status, plainData.country, plainData.createdOn, new UserId_1.UserId(plainData.createdBy), plainData.lastModifiedOn, plainData.lastModifiedBy);
    }
    toPrimitives() {
        var _a;
        return {
            id: this.id.value,
            firstName: this.firstName.value,
            lastName: this.lastName.value,
            nic: this.nic.value,
            email: this.email.value,
            password: this.password.value,
            birthDate: this.birthDate.value,
            userImage: ((_a = this.userImage) === null || _a === void 0 ? void 0 : _a.value) || null,
            idRole: this.idRole,
            idUserStatus: this.idUserStatus,
            idCountry: this.idCountry,
            createdOn: this.createdOn,
            createdBy: this.createdBy,
            lastModifiedOn: this.lastModifiedOn || null,
            lastModifiedBy: this.lastModifiedBy || null
        };
    }
}
exports.User = User;
