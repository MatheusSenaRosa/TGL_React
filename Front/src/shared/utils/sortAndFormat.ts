export const sortAndFormat = (array: number[]) => {
  return array
    .sort((a, b) => a - b)
    .map((item) => String(item).padStart(2, "0"))
    .join(", ");
};
