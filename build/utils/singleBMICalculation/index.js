"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const calculateBMI_1 = __importDefault(require("../calculateBMI"));
const calculateCategoryRisk_1 = __importDefault(require("../calculateCategoryRisk"));
const displayResult_1 = __importDefault(require("../displayResult"));
const singleBMICalculation = async () => {
    const { height } = await inquirer_1.default.prompt({
        name: "height",
        type: "number",
        message: "Please enter a height value in centimeters\n",
    });
    const { weight } = await inquirer_1.default.prompt({
        name: "weight",
        type: "number",
        message: "Please enter a weight value in kilos\n",
    });
    const BMIresult = (0, calculateBMI_1.default)(height, weight);
    const categoryresult = (0, calculateCategoryRisk_1.default)(BMIresult);
    (0, displayResult_1.default)(height, weight, BMIresult, categoryresult);
};
exports.default = singleBMICalculation;
