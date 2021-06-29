"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const complaintSchema = new mongoose_1.Schema({
    userid: { type: mongoose_1.Types.ObjectId, ref: 'User', required: true },
    priority: { type: String, required: true },
    category: { type: String, required: true },
    subject: { type: String, required: true },
    description: { type: String, required: true }
});
exports.default = mongoose_1.model('Complaint', complaintSchema, 'Complaints');
