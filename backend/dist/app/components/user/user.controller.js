"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_repository_1 = __importDefault(require("./user.repository"));
function getAllUsers() {
    return user_repository_1.default.getAllUsers();
}
function getUserById(id) {
    return user_repository_1.default.getUserById(id);
}
function getUserByUsername(username) {
    return user_repository_1.default.getUserByUsername(username);
}
function addUser(user) {
    return user_repository_1.default.addUser(user);
}
exports.default = { getAllUsers, getUserById, addUser, getUserByUsername };
