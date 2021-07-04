import { model, Schema, Types } from "mongoose";

const loginSchema: Schema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true }
});

export default model('Login', loginSchema, 'Logins');