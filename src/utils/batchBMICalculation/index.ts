import { jsonBatchData } from "../../constant";
import calculateBMI from "../calculateBMI";
import calculateCategoryRisk from "../calculateCategoryRisk";
import displayResult from "../displayResult";

const batchBMICalculation = async () => {
  jsonBatchData.forEach((data) => {
    const height = data.HeightCm;
    const weight = data.WeightKg;
    const BMIresult = calculateBMI(height, weight);

    const categoryresult = calculateCategoryRisk(BMIresult);

    displayResult(height, weight, BMIresult, categoryresult);
  });
};

export default batchBMICalculation;
