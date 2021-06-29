import { model, Schema, Types } from "mongoose";

const complaintSchema: Schema = new Schema({
    userid: { type: Types.ObjectId, ref: 'User', required: true },
    priority: { type: String, required: true },
    category: { type: String, required: true },
    subject: { type: String, required: true },
    description: { type: String, required: true }
});

export default model('Complaint', complaintSchema, 'Complaints');