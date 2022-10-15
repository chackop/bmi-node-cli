const calculateBMI = (height: number, weight: number): number => {
  return Math.round(weight / ((height / 100) ^ 2));
};

export default calculateBMI;
