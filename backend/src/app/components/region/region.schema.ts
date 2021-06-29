import { model, Schema } from "mongoose";

const regionSchema: Schema = new Schema({
    name: { type: String, required: true },
    districts: [{ type: String, required: true}]
});

export default model('Region', regionSchema, 'Regions');