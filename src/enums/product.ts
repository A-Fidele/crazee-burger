import { ProductType } from "../typeScript/ProductType";

export const EMPTY_PRODUCT: ProductType = Object.freeze({
  id: "",
  title: "",
  imageSource: "",
  quantity: 0,
  price: 0,
  isAvailable: true,
  isPublicised: false,
});

export const DEFAULT_IMAGE = "/images/coming-soon.png";
export const OUT_OF_STOCK_IMAGE = "/images/stock-epuise.png"

export const BASKET_MESSAGE = {
  EMPTY: "Votre commande est vide.",
  LOADING: "Chargement en cours...",
  NOT_AVAILABLE: "Non disponible",
}

export const isAvailableOptions = [
  { value: true, label: "En Stock" },
  { value: false, label: "Rupture" },
];

export const isPublicisedOptions = [
  { value: false, label: "Sans pub" },
  { value: true, label: "Pub" },
];