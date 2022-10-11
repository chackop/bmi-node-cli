import calculateBMI from ".";

describe("calculateBMI", () => {
  it.each`
    heightInMeters | weightInKilos | calcBMIResult
    ${1.71}        | ${96}         | ${1.78}
    ${1.61}        | ${85}         | ${1.89}
    ${1.8}         | ${77}         | ${0.23}
    ${1.5}         | ${62}         | ${0.24}
    ${1.67}        | ${82}         | ${0.2}
  `(
    "calculates BMI value: $calcBMIResult based on supplied height: $heightInMeters and weight: $weightInKilos ",
    ({
      heightInMeters,
      weightInKilos,
      calcBMIResult,
    }: {
      heightInMeters: number;
      weightInKilos: number;
      calcBMIResult: number;
    }) => {
      expect(calculateBMI(heightInMeters, weightInKilos)).toStrictEqual(
        calcBMIResult
      );
    }
  );
});
