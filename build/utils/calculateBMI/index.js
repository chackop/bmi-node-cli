"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculateBMI = (height, weight) => {
    return Math.round(weight / ((height / 100) ^ 2));
};
exports.default = calculateBMI;
