"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const region_repository_1 = __importDefault(require("./region.repository"));
// import { Region } from '../../models/region.model';
function getAllRegions() {
    return region_repository_1.default.getAllRegions();
}
function getRegionById(name) {
    return region_repository_1.default.getRegionByName(name);
}
exports.default = { getAllRegions, getRegionById };
