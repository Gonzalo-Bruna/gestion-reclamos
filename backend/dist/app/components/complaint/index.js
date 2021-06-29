"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const complaint_network_1 = __importDefault(require("./complaint.network"));
const complaint = express_1.default();
complaint.use('/complaints', complaint_network_1.default);
exports.default = complaint;
