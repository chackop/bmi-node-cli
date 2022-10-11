"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const askOptions = async () => {
    const answer = await inquirer_1.default.prompt({
        name: "ask_option",
        type: "list",
        message: "Please select an option\n",
        choices: [
            "Option 1 - Single BMI Calculation",
            "Option 2 - Batch BMI Calculation",
            "Exit",
        ],
    });
    return answer;
};
exports.default = askOptions;
