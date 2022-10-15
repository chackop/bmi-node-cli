"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const _1 = tslib_1.__importDefault(require("."));
describe("calculateBMI", () => {
    it.each `
    heightInCM | weightInKilos | calcBMIResult
    ${171}     | ${96}         | ${32}
    ${161}     | ${85}         | ${28}
    ${180}     | ${77}         | ${26}
    ${166}     | ${62}         | ${21}
    ${150}     | ${70}         | ${23}
    ${167}     | ${82}         | ${27}
  `("calculates BMI value: $calcBMIResult based on supplied height: $heightInCM and weight: $weightInKilos ", ({ heightInCM, weightInKilos, calcBMIResult }) => {
        expect((0, _1.default)(heightInCM, weightInKilos)).toStrictEqual(calcBMIResult);
    });
});
