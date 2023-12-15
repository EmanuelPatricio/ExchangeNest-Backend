"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const dependency_injection_1 = __importDefault(require("../dependency-injection"));
const express_validator_1 = require("express-validator");
const _1 = require(".");
const register = (router) => {
    const reqSchemaCreateNewUser = [
        (0, express_validator_1.body)('id').exists().isNumeric(),
        (0, express_validator_1.body)('firstName').exists().isString(),
        (0, express_validator_1.body)('lastName').exists().isString(),
        (0, express_validator_1.body)('nic').exists().isString(),
        (0, express_validator_1.body)('email').exists().isEmail(),
        (0, express_validator_1.body)('password').exists(),
        (0, express_validator_1.body)('birthDate').exists().isISO8601().toDate(),
        (0, express_validator_1.body)('userImage'),
        (0, express_validator_1.body)('idRole').exists().isNumeric(),
        (0, express_validator_1.body)('idUserStatus').exists().isNumeric(),
        (0, express_validator_1.body)('idCountry').exists().isNumeric(),
        (0, express_validator_1.body)('createdOn').exists().isISO8601().toDate(),
        (0, express_validator_1.body)('createdBy'),
        (0, express_validator_1.body)('lastModifiedOn'),
        (0, express_validator_1.body)('lastModifiedBy')
    ];
    const reqSchemaLoginUser = [(0, express_validator_1.body)('email').exists().isEmail(), (0, express_validator_1.body)('password').exists()];
    const userLoginController = dependency_injection_1.default.get('Apps.pie.controllers.users.UserLoginController');
    const userPostController = dependency_injection_1.default.get('Apps.pie.controllers.users.UserPostController');
    router.get('/api/auth/login', reqSchemaLoginUser, _1.validateReqSchema, (req, res) => {
        userLoginController.run(req, res);
    });
    router.post('/api/users', reqSchemaCreateNewUser, _1.validateReqSchema, (req, res) => {
        userPostController.run(req, res);
    });
};
exports.register = register;
