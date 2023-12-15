"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFirstName = void 0;
const StringValueObject_1 = require("../../../Shared/domain/value-object/StringValueObject");
const UserFirstLastNameLengthExceeded_1 = require("./UserFirstLastNameLengthExceeded");
class UserFirstName extends StringValueObject_1.StringValueObject {
    constructor(value) {
        super(value);
        this.ensureLengthIsLessThan30Characters(value);
    }
    ensureLengthIsLessThan30Characters(value) {
        if (value.length > 30) {
            throw new UserFirstLastNameLengthExceeded_1.UserFirstLastNameLengthExceeded(`The User first name <${value}> has more than 30 characters`);
        }
    }
}
exports.UserFirstName = UserFirstName;
