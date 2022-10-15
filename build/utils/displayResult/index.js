"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../../types");
const displayResult = (height, weight, BMIValue, category) => {
    console.log("---------BMI details---------------");
    console.log(`Your entered height in centimeters is ${height}`);
    console.log(`Your entered weight in kg is ${weight}`);
    console.log(`Your BMI in kg/m2 is ${BMIValue}`);
    console.log(`Your BMI Category is ${category}`);
    console.log(`Your Health Risk is ${types_1.categoryRiskMap[category]}`);
    console.log("-----------------------------------------------------");
};
exports.default = displayResult;
