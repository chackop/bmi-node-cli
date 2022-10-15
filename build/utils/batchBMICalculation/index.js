"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const constant_1 = require("../../constant");
const calculateBMI_1 = tslib_1.__importDefault(require("../calculateBMI"));
const calculateCategoryRisk_1 = tslib_1.__importDefault(require("../calculateCategoryRisk"));
const displayResult_1 = tslib_1.__importDefault(require("../displayResult"));
const batchBMICalculation = async () => {
    constant_1.jsonBatchData.forEach((data) => {
        const height = data.HeightCm;
        const weight = data.WeightKg;
        const BMIresult = (0, calculateBMI_1.default)(height, weight);
        const categoryresult = (0, calculateCategoryRisk_1.default)(BMIresult);
        (0, displayResult_1.default)(height, weight, BMIresult, categoryresult);
    });
};
exports.default = batchBMICalculation;
