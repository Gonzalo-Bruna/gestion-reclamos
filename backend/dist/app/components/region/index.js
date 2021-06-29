"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const region_network_1 = __importDefault(require("./region.network"));
const region = express_1.default();
region.use('/regions', region_network_1.default);
exports.default = region;
