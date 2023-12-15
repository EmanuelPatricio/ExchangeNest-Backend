"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_dependency_injection_1 = require("node-dependency-injection");
const node_path_1 = __importDefault(require("node:path"));
const container = new node_dependency_injection_1.ContainerBuilder();
const loader = new node_dependency_injection_1.YamlFileLoader(container);
const env = process.env.NODE_ENV || 'development';
const routesPath = node_path_1.default.join(__dirname, `application_${env.trim()}.yaml`).replace(/\\/g, '/');
loader.load(routesPath);
exports.default = container;
