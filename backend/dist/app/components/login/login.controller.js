"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const login_repository_1 = __importDefault(require("./login.repository"));
function login(login) {
    return login_repository_1.default.login(login);
}
exports.default = { login };
