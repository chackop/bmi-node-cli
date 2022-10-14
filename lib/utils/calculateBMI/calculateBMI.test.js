"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const _1 = tslib_1.__importDefault(require("."));
describe("calculateBMI", () => {
    it.each `
    heightInCM | weightInKilos | calcBMIResult
    ${171}     | ${96}         | ${1.78}
    ${161}     | ${85}         | ${1.89}
    ${180}     | ${77}         | ${0.23}
    ${150}     | ${62}         | ${0.24}
    ${167}     | ${82}         | ${0.2}
  `("calculates BMI value: $calcBMIResult based on supplied height: $heightInCM and weight: $weightInKilos ", ({ heightInCM, weightInKilos, calcBMIResult }) => {
        expect((0, _1.default)(heightInCM, weightInKilos)).toStrictEqual(calcBMIResult);
    });
});
