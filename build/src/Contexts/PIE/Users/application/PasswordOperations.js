"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.passwordEncrypted = void 0;
const crypto_js_1 = __importDefault(require("crypto-js"));
const passwordEncrypted = (value) => {
    return crypto_js_1.default.SHA3(value).toString();
};
exports.passwordEncrypted = passwordEncrypted;
