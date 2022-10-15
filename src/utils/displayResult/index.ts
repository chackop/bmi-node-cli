import { BMICategory, categoryRiskMap } from "../../types";

const displayResult = (
  height: number,
  weight: number,
  BMIValue: number,
  category: BMICategory
) => {
  console.log("<---------BMI details--------------->");

  console.log(`Your entered height in centimeters is ${height}`);
  console.log(`Your entered weight in kg is ${weight}`);
  console.log(`Your BMI in kg/m2 is ${BMIValue}`);
  console.log(`Your BMI Category is ${category}`);
  console.log(`Your Health Risk is ${categoryRiskMap[category]}`);

  console.log("X---------------------------------------------------X");
};

export default displayResult;
