import inquirer from "inquirer";
import { jsonBatchData } from "../../constant";
import calculateBMI from "../calculateBMI";
import calculateCategoryRisk from "../calculateCategoryRisk";
import displayResult from "../displayResult";

const batchBMICalculation = async () => {
  jsonBatchData.forEach((data) => {
    const heightToM = data.HeightCm / 100;
    const weight = data.WeightKg;
    const BMIresult = calculateBMI(heightToM, weight);

    const categoryresult = calculateCategoryRisk(BMIresult);

    displayResult(heightToM, weight, BMIresult, categoryresult);
  });
};

export default batchBMICalculation;
