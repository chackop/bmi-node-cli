#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const types_1 = require("./types");
const askOptions_1 = tslib_1.__importDefault(require("./utils/askOptions"));
const batchBMICalculation_1 = tslib_1.__importDefault(require("./utils/batchBMICalculation"));
const singleBMICalculation_1 = tslib_1.__importDefault(require("./utils/singleBMICalculation"));
const mainFunction = async () => {
    console.clear();
    const selectOption = await (0, askOptions_1.default)();
    if (selectOption === types_1.Options.Single) {
        (0, singleBMICalculation_1.default)();
    }
    else if (selectOption === types_1.Options.Batch) {
        (0, batchBMICalculation_1.default)();
    }
    else if (selectOption === types_1.Options.Exit) {
        process.exit();
    }
};
mainFunction();
