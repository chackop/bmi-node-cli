import calculateCategoryRisk from ".";
import { BMICategory } from "../../types";

describe("calculateCategoryRisk", () => {
  it.each`
    BMIValue | categoryRiskResult
    ${32}    | ${BMICategory.Moderate}
    ${28}    | ${BMICategory.Overweight}
    ${26}    | ${BMICategory.Overweight}
    ${21}    | ${BMICategory.Normal}
    ${23}    | ${BMICategory.Normal}
    ${27}    | ${BMICategory.Overweight}
  `(
    "calculates category risk: $categoryRiskResult based on supplied BMI Value: $BMIValue",
    ({ BMIValue, categoryRiskResult }) => {
      expect(calculateCategoryRisk(BMIValue)).toStrictEqual(categoryRiskResult);
    }
  );
});
