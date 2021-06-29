"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_module_1 = __importDefault(require("./modules/mongoose.module"));
const cors_1 = __importDefault(require("cors"));
const index_1 = __importDefault(require("./components/user/index"));
const index_2 = __importDefault(require("./components/complaint/index"));
const index_3 = __importDefault(require("./components/region/index"));
const index_4 = __importDefault(require("./components/login/index"));
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        /* Server connection */
        const server = express_1.default();
        const port = 3000;
        server.use(express_1.default.json());
        server.use(cors_1.default());
        server.use('/api', index_1.default, index_2.default, index_3.default, index_4.default);
        try {
            mongoose_module_1.default.connect();
            console.log("database connection successful");
            server.listen(port, () => {
                console.log("Server listening on : http://localhost:3000/api");
            });
        }
        catch (error) {
            console.log("database connection failed");
        }
    });
}
exports.default = { main };
