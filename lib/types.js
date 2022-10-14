"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryRiskMap = exports.HealthRisk = exports.BMICategory = exports.SingleBMI = exports.Options = void 0;
var Options;
(function (Options) {
    Options["Single"] = "Option 1 - Single BMI Calculation";
    Options["Batch"] = "Option 2 - Batch BMI Calculation";
    Options["Exit"] = "Exit";
})(Options = exports.Options || (exports.Options = {}));
var SingleBMI;
(function (SingleBMI) {
    SingleBMI["Height"] = "Enter Height in Meters";
    SingleBMI["Weight"] = "Enter Weight in Kilograms";
})(SingleBMI = exports.SingleBMI || (exports.SingleBMI = {}));
var BMICategory;
(function (BMICategory) {
    BMICategory["Underweight"] = "Underweight";
    BMICategory["Normal"] = "Normal weight";
    BMICategory["Overweight"] = "Overweight";
    BMICategory["Moderate"] = "Moderately obese";
    BMICategory["Severe"] = "Severely obese";
    BMICategory["VerySevere"] = "Very severely obese";
})(BMICategory = exports.BMICategory || (exports.BMICategory = {}));
var HealthRisk;
(function (HealthRisk) {
    HealthRisk["MalNutrition"] = "Malnutrition risk";
    HealthRisk["Low"] = "Low risk";
    HealthRisk["Enhanced"] = "Enhanced risk";
    HealthRisk["Medium"] = "Medium risk";
    HealthRisk["High"] = "High risk";
    HealthRisk["VeryHigh"] = "Very high risk";
})(HealthRisk = exports.HealthRisk || (exports.HealthRisk = {}));
exports.categoryRiskMap = {
    [BMICategory.Underweight]: HealthRisk.MalNutrition,
    [BMICategory.Normal]: HealthRisk.Low,
    [BMICategory.Overweight]: HealthRisk.Enhanced,
    [BMICategory.Moderate]: HealthRisk.Medium,
    [BMICategory.Severe]: HealthRisk.High,
    [BMICategory.VerySevere]: HealthRisk.VeryHigh,
};
