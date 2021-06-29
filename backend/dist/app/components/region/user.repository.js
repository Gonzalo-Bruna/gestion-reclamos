"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_schema_1 = __importDefault(require("./user.schema"));
function getAllUsers() {
    return user_schema_1.default.find();
}
function getUserById(id) {
    return user_schema_1.default.findOne({ _id: id });
}
function addUser(user) {
    return user_schema_1.default.create(user);
}
exports.default = { getAllUsers, getUserById, addUser };
