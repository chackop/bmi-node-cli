"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculateBMI = (height, weight) => {
    return height / 100 / (weight ^ 2);
};
exports.default = calculateBMI;
