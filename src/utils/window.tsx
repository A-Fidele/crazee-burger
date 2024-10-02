import { ProductType } from "../typeScript/ProductType";

export const refreshPage = () => {
  window.location.reload();
};

export const setLocalStorage = (key: string, value: ProductType[]) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorage = (key: string) => {
  const value = localStorage.getItem(key);
  if (value !== null) {
    return JSON.parse(value as string);
  }
};
