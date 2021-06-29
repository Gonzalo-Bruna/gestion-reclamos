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
const region_controller_1 = __importDefault(require("./region.controller"));
const response_module_1 = __importDefault(require("./../../modules/response.module"));
const router = express_1.default.Router();
router.get('/regions-list', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let regions = yield region_controller_1.default.getAllRegions();
        response_module_1.default.success(req, res, regions);
    }
    catch (error) {
        response_module_1.default.error(req, res);
    }
}));
router.get('/:name', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const name = req.params['name'];
    try {
        let region = yield region_controller_1.default.getRegionById(name);
        response_module_1.default.success(req, res, region);
    }
    catch (error) {
        response_module_1.default.error(req, res);
    }
}));
exports.default = router;
