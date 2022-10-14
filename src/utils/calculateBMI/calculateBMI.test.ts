import calculateBMI from ".";

describe("calculateBMI", () => {
  it.each`
    heightInCM | weightInKilos | calcBMIResult
    ${171}     | ${96}         | ${1.78}
    ${161}     | ${85}         | ${1.89}
    ${180}     | ${77}         | ${0.23}
    ${150}     | ${62}         | ${0.24}
    ${167}     | ${82}         | ${0.2}
  `(
    "calculates BMI value: $calcBMIResult based on supplied height: $heightInCM and weight: $weightInKilos ",
    ({ heightInCM, weightInKilos, calcBMIResult }) => {
      expect(calculateBMI(heightInCM, weightInKilos)).toStrictEqual(
        calcBMIResult
      );
    }
  );
});
