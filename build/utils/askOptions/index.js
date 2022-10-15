"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const inquirer_1 = tslib_1.__importDefault(require("inquirer"));
const types_1 = require("../../types");
const askOptions = async () => {
    const { ask_option } = await inquirer_1.default.prompt({
        name: "ask_option",
        type: "list",
        message: "Please select an option\n",
        choices: [types_1.Options.Single, types_1.Options.Batch, types_1.Options.Exit],
    });
    return ask_option;
};
exports.default = askOptions;
