"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../../types");
const calculateCategoryRisk = (BMIValue) => {
    if (BMIValue >= 40) {
        return types_1.BMICategory.VerySevere;
    }
    else if (BMIValue >= 35) {
        return types_1.BMICategory.Severe;
    }
    else if (BMIValue >= 30) {
        return types_1.BMICategory.Moderate;
    }
    else if (BMIValue >= 25) {
        return types_1.BMICategory.Overweight;
    }
    else if (BMIValue >= 18.5) {
        return types_1.BMICategory.Normal;
    }
    else {
        return types_1.BMICategory.Underweight;
    }
};
exports.default = calculateCategoryRisk;
