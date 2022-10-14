"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constant_1 = require("../../constant");
const calculateBMI_1 = __importDefault(require("../calculateBMI"));
const calculateCategoryRisk_1 = __importDefault(require("../calculateCategoryRisk"));
const displayResult_1 = __importDefault(require("../displayResult"));
const batchBMICalculation = async () => {
    constant_1.jsonBatchData.forEach((data) => {
        const heightToM = data.HeightCm / 100;
        const weight = data.WeightKg;
        const BMIresult = (0, calculateBMI_1.default)(heightToM, weight);
        const categoryresult = (0, calculateCategoryRisk_1.default)(BMIresult);
        (0, displayResult_1.default)(heightToM, weight, BMIresult, categoryresult);
    });
};
exports.default = batchBMICalculation;
