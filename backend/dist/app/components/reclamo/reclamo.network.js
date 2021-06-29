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
const complaint_controller_1 = __importDefault(require("./complaint.controller"));
const response_module_1 = __importDefault(require("./../../modules/response.module"));
const router = express_1.default.Router();
router.get('/complaint-list', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let complaints = yield complaint_controller_1.default.getAllComplaints();
        response_module_1.default.success(req, res, complaints);
    }
    catch (error) {
        response_module_1.default.error(req, res);
    }
}));
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params['id'];
    try {
        let complaint = yield complaint_controller_1.default.getComplaintById(id);
        response_module_1.default.success(req, res, complaint);
    }
    catch (error) {
        response_module_1.default.error(req, res);
    }
}));
router.post('/new', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const complaint = req.body;
    try {
        let newComplaint = yield complaint_controller_1.default.addComplaint(complaint);
        response_module_1.default.success(req, res, newComplaint, 201);
    }
    catch (error) {
        response_module_1.default.error(req, res);
    }
}));
exports.default = router;
