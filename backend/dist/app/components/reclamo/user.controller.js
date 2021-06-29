"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const reclamo_repository_1 = __importDefault(require("./reclamo.repository"));
function getAllReclamos() {
    return reclamo_repository_1.default.getAllReclamos();
}
function getReclamoById(id) {
    return reclamo_repository_1.default.getReclamoById(id);
}
function addReclamo(reclamo) {
    return reclamo_repository_1.default.addReclamo(reclamo);
}
exports.default = { getAllReclamos, getReclamoById, addReclamo };
