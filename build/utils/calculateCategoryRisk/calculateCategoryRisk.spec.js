"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const _1 = tslib_1.__importDefault(require("."));
const types_1 = require("../../types");
describe("calculateCategoryRisk", () => {
    it.each `
    BMIValue | categoryRiskResult
    ${32}    | ${types_1.BMICategory.Moderate}
    ${28}    | ${types_1.BMICategory.Overweight}
    ${26}    | ${types_1.BMICategory.Overweight}
    ${21}    | ${types_1.BMICategory.Normal}
    ${23}    | ${types_1.BMICategory.Normal}
    ${27}    | ${types_1.BMICategory.Overweight}
  `("calculates category risk: $categoryRiskResult based on supplied BMI Value: $BMIValue", ({ BMIValue, categoryRiskResult }) => {
        expect((0, _1.default)(BMIValue)).toStrictEqual(categoryRiskResult);
    });
});
