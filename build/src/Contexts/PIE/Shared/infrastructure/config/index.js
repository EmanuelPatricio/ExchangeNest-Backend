"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const convict_1 = __importDefault(require("convict"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const pieConfig = (0, convict_1.default)({
    env: {
        doc: 'The application environment.',
        format: ['production', 'development', 'staging', 'test'],
        default: 'default',
        env: 'NODE_ENV'
    },
    jwt_secret: {
        doc: 'The JWT secret key.',
        secret: 'JWT_SECRET',
        default: 'default'
    },
    jwt_audience: {
        doc: 'The JWT Audience.',
        secret: 'JWT_AUDIENCE',
        default: 'default'
    },
    jwt_issuer: {
        doc: 'The JWT Issuer.',
        secret: 'JWT_ISSUER',
        default: 'default'
    },
    mongo: {
        url: {
            doc: 'The Mongo connection URL',
            format: String,
            default: process.env.MONGO_URL || 'mongodb+srv://test:test@cluster0.5n3ek.mongodb.net/?retryWrites=true&w=majority',
            env: process.env.MONGO_URL || 'mongodb+srv://test:test@cluster0.5n3ek.mongodb.net/?retryWrites=true&w=majority'
        }
    }
});
const defaultConfigPath = path_1.default.join(__dirname, 'default.json').replace(/\\/g, '/');
const envConfigPath = path_1.default.join(__dirname, pieConfig.get('env').trim() + '.json').replace(/\\/g, '/');
pieConfig.loadFile([defaultConfigPath, envConfigPath]);
exports.default = pieConfig;
