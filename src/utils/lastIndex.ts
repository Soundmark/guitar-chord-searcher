export const findLastIndex = (
  arr: (string | number)[],
  target: string | number
): number => {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
};
