#!/usr/bin/env node

import { Options } from "./types";
import askOptions from "./utils/askOptions";
import batchBMICalculation from "./utils/batchBMICalculation";
import singleBMICalculation from "./utils/singleBMICalculation";

const mainFunction = async () => {
  console.clear();

  const selectOption = await askOptions();

  if (selectOption === Options.Single) {
    singleBMICalculation();
  } else if (selectOption === Options.Batch) {
    batchBMICalculation();
  } else if (selectOption === Options.Exit) {
    process.exit();
  }
};

mainFunction();
