"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import inquirer from "inquirer";
const inquirer = require("inquirer");
const types_1 = require("../../types");
const askOptions = async () => {
    const answer = await inquirer.prompt({
        name: "ask_option",
        type: "list",
        message: "Please select an option\n",
        choices: [types_1.Options.Single, types_1.Options.Batch, types_1.Options.Exit],
    });
    return answer;
};
exports.default = askOptions;
