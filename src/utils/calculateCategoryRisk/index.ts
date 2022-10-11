import { BMICategory, categoryRiskMap } from "../../types";

const calculateCategoryRisk = (BMIValue: number): BMICategory => {
  if (BMIValue >= 40) {
    return BMICategory.VerySevere;
  } else if (BMIValue >= 35) {
    return BMICategory.Severe;
  } else if (BMIValue >= 30) {
    return BMICategory.Moderate;
  } else if (BMIValue >= 25) {
    return BMICategory.Overweight;
  } else if (BMIValue >= 18.5) {
    return BMICategory.Normal;
  } else {
    return BMICategory.Underweight;
  }
};

export default calculateCategoryRisk;
