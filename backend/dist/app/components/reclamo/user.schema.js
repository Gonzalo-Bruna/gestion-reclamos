"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const reclamoSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    surName: { type: String, required: true },
    rut: { type: String, required: true },
    address: { type: String, required: true },
    region: { type: String, required: true },
    district: { type: String, required: true },
    reclamoname: { type: String, required: true },
    password: { type: String, required: true }
});
exports.default = mongoose_1.model('Reclamo', reclamoSchema, 'Reclamos');
