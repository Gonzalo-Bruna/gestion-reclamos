"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const region_schema_1 = __importDefault(require("./region.schema"));
function getAllRegions() {
    return region_schema_1.default.find();
}
function getRegionByName(name) {
    return region_schema_1.default.findOne({ name: name });
}
exports.default = { getAllRegions, getRegionByName };
