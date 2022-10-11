import inquirer from "inquirer";
import calculateBMI from "../calculateBMI";
import calculateCategoryRisk from "../calculateCategoryRisk";
import displayResult from "../displayResult";

const singleBMICalculation = async () => {
  const { height } = await inquirer.prompt({
    name: "height",
    type: "number",
    message: "Please enter a height value in meters\n",
  });

  const { weight } = await inquirer.prompt({
    name: "weight",
    type: "number",
    message: "Please enter a weight value in kilos\n",
  });

  const BMIresult = calculateBMI(height, weight);
  const categoryresult = calculateCategoryRisk(BMIresult);

  displayResult(height, weight, BMIresult, categoryresult);
};

export default singleBMICalculation;
