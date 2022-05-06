export const priceFormatter = (price: number) => {
  const realPrice = price.toFixed(2).replace(".", ",");

  return `R$ ${realPrice}`;
};
