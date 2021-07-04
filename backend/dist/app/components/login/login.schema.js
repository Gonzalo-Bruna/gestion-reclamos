"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const loginSchema = new mongoose_1.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true }
});
exports.default = mongoose_1.model('Login', loginSchema, 'Logins');
