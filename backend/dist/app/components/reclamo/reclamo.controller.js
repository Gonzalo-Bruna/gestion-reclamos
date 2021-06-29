"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const complaint_repository_1 = __importDefault(require("./complaint.repository"));
function getAllComplaints() {
    return complaint_repository_1.default.getAllComplaints();
}
function getComplaintById(id) {
    return complaint_repository_1.default.getComplaintById(id);
}
function addComplaint(complaint) {
    return complaint_repository_1.default.addComplaint(complaint);
}
exports.default = { getAllComplaints, getComplaintById, addComplaint };
