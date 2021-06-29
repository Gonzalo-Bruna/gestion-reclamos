"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const regionSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    districts: [{ type: String, required: true }]
});
exports.default = mongoose_1.model('Region', regionSchema, 'Regions');
