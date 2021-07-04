"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const complaint_schema_1 = __importDefault(require("./complaint.schema"));
function getAllComplaints() {
    return complaint_schema_1.default.find();
}
function getComplaintById(id) {
    return complaint_schema_1.default.findOne({ _id: id });
}
function addComplaint(complaint) {
    return complaint_schema_1.default.create(complaint);
}
function getAllComplaintsByUser(userId) {
    return complaint_schema_1.default.find({ userid: userId });
}
exports.default = { getAllComplaints, getComplaintById, addComplaint, getAllComplaintsByUser };
