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
const reclamo_controller_1 = __importDefault(require("./reclamo.controller"));
const response_module_1 = __importDefault(require("./../../modules/response.module"));
const router = express_1.default.Router();
router.get('/reclamo-list', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let reclamos = yield reclamo_controller_1.default.getAllReclamos();
        response_module_1.default.success(req, res, reclamos);
    }
    catch (error) {
        response_module_1.default.error(req, res);
    }
}));
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params['id'];
    try {
        let reclamo = yield reclamo_controller_1.default.getReclamoById(id);
        response_module_1.default.success(req, res, reclamo);
    }
    catch (error) {
        response_module_1.default.error(req, res);
    }
}));
router.post('/new', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const reclamo = req.body;
    try {
        let newReclamo = yield reclamo_controller_1.default.addReclamo(reclamo);
        response_module_1.default.success(req, res, newReclamo, 201);
    }
    catch (error) {
        response_module_1.default.error(req, res);
    }
}));
exports.default = router;
