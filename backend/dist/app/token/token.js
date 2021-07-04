"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
const response_module_1 = __importDefault(require("../modules/response.module"));
const jwt = require('jsonwebtoken');
function verifyToken(req, res, next) {
    if (!req.headers.authorization) {
        response_module_1.default.error(req, res, "Unauthorized request", 401);
    }
    else {
        let token = req.headers.authorization.split(' ')[1];
        if (token === 'null') {
            response_module_1.default.error(req, res, "Unauthorized request", 401);
        }
        else {
            let payload = jwt.verify(token, "secretKey");
            if (!payload) {
                response_module_1.default.error(req, res, "Unauthorized request", 401);
            }
            else {
                req.userId = payload.subject;
                next();
            }
        }
    }
}
exports.verifyToken = verifyToken;
exports.default = jwt;
