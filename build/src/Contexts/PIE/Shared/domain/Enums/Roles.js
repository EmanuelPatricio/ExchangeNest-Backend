"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roles = exports.Role = void 0;
var Role;
(function (Role) {
    Role["Student"] = "Student";
    Role["Host"] = "Host";
    Role["Organization"] = "Organization";
    Role["Administrator"] = "Administrator";
})(Role || (exports.Role = Role = {}));
exports.roles = {
    1: Role.Student,
    2: Role.Host,
    3: Role.Organization,
    4: Role.Administrator
};
