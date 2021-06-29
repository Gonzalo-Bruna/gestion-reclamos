"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const reclamo_schema_1 = __importDefault(require("./reclamo.schema"));
function getAllReclamos() {
    return reclamo_schema_1.default.find();
}
function getReclamoById(id) {
    return reclamo_schema_1.default.findOne({ _id: id });
}
function addReclamo(reclamo) {
    return reclamo_schema_1.default.create(reclamo);
}
exports.default = { getAllReclamos, getReclamoById, addReclamo };
