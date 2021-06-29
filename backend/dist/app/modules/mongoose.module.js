"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
function connect() {
    const mongoUri = "mongodb+srv://admin:admin@cluster0.06qcc.mongodb.net";
    const nameDatabase = 'dev-reclamos';
    const mongooseOptions = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    };
    return mongoose_1.default.connect(`${mongoUri}/${nameDatabase}`, mongooseOptions);
}
exports.default = { connect };
