const calculateBMI = (height: number, weight: number): number => {
  return height / 100 / (weight ^ 2);
};

export default calculateBMI;
