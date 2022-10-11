export enum Options {
  Single = "Option 1 - Single BMI Calculation",
  Batch = "Option 2 - Batch BMI Calculation",
  Exit = "Exit",
}

export enum SingleBMI {
  Height = "Enter Height in Meters",
  Weight = "Enter Weight in Kilograms",
}

export enum BMICategory {
  Underweight = "Underweight",
  Normal = "Normal weight",
  Overweight = "Overweight",
  Moderate = "Moderately obese",
  Severe = "Severely obese",
  VerySevere = "Very severely obese",
}

export enum HealthRisk {
  MalNutrition = "Malnutrition risk",
  Low = "Low risk",
  Enhanced = "Enhanced risk",
  Medium = "Medium risk",
  High = "High risk",
  VeryHigh = "Very high risk",
}

export const categoryRiskMap: Record<BMICategory, HealthRisk> = {
  [BMICategory.Underweight]: HealthRisk.MalNutrition,
  [BMICategory.Normal]: HealthRisk.Low,
  [BMICategory.Overweight]: HealthRisk.Enhanced,
  [BMICategory.Moderate]: HealthRisk.Medium,
  [BMICategory.Severe]: HealthRisk.High,
  [BMICategory.VerySevere]: HealthRisk.VeryHigh,
};
