export const positive = (n: number): number => Math.max(0, n);

export const twist = (n: number): number => {
  let result = n;

  if (n < 0) {
    result *= -1;
  }

  if (n < 1) {
    result *= -1;
  }

  return result;
};
