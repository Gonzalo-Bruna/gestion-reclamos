import { model, Schema } from "mongoose";

const userSchema: Schema = new Schema({
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    surName: { type: String, required: true },
    rut: { type: String, required: true },
    address: { type: String, required: true },
    region: { type: String, required: true },
    district: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true }
});

export default model('User', userSchema, 'Users');