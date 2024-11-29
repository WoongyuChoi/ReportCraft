export const generateRandomNumberWithCommas = (min: number, max: number): string => {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber.toLocaleString("en-US");
};
