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
exports.validateReqSchema = exports.registerRoutes = void 0;
const glob_1 = require("glob");
const express_validator_1 = require("express-validator");
const http_status_1 = __importDefault(require("http-status"));
const node_path_1 = __importDefault(require("node:path"));
function registerRoutes(router) {
    return __awaiter(this, void 0, void 0, function* () {
        const routesPath = node_path_1.default.join(__dirname, '**', '*.route.*').replace(/\\/g, '/');
        const routes = yield (0, glob_1.glob)(routesPath);
        routes.map(route => register(route, router));
    });
}
exports.registerRoutes = registerRoutes;
function register(routePath, router) {
    const route = require(routePath);
    route.register(router);
}
function validateReqSchema(req, res, next) {
    const validationErrors = (0, express_validator_1.validationResult)(req);
    if (validationErrors.isEmpty()) {
        return next();
    }
    const errors = validationErrors.array().map((err) => ({ [err.type]: err.msg }));
    return res.status(http_status_1.default.UNPROCESSABLE_ENTITY).json({
        errors
    });
}
exports.validateReqSchema = validateReqSchema;
