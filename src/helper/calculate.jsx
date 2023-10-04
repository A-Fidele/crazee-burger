export const calculateBasketTotal = (array) => {
  const total = array.reduce((total, array) => {
    total += array.price * array.quantity;
    return total;
  }, 0);
  return total;
};
