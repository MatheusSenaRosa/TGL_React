export const formatNumericArray = (array: string[]) =>
  array
    .map((number) => Number(number))
    .sort((a, b) => a - b)
    .join(", ");

export const formatPrice = (price: number) =>
  `R$ ${price.toFixed(2).replace(".", ",")}`;
