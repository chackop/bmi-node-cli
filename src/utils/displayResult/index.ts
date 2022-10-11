import { BMICategory, categoryRiskMap, HealthRisk } from "../../types";

const displayResult = (
  height: number,
  weight: number,
  BMIValue: number,
  category: BMICategory
) => {
  console.log(`Your entered height in meters is ${height}`);
  console.log(`Your entered weight in kg is ${weight}`);
  console.log(`Your BMI in kg/m2 is ${BMIValue}`);
  console.log(`Your BMI Category is ${category}`);
  console.log(`Your Health Risk is ${categoryRiskMap[category]}`);
};

export default displayResult;
