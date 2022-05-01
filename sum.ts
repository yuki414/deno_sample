export const sum = (...nums: number[]) => {
  return nums.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0,
  );
};
