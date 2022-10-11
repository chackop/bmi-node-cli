#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const askOptions_1 = __importDefault(require("./utils/askOptions"));
const mainFunction = async () => {
    console.clear();
    const selectOption = await (0, askOptions_1.default)();
    console.log(selectOption);
};
mainFunction();
