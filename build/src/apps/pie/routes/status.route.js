"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const dependency_injection_1 = __importDefault(require("../dependency-injection"));
const register = (router) => {
    const statusGetController = dependency_injection_1.default.get('Apps.pie.controllers.StatusGetController');
    router.get('/status', (req, res) => statusGetController.run(req, res));
};
exports.register = register;
