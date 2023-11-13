import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import { FiPackage } from "react-icons/fi";
import { GoMegaphone } from "react-icons/go";
import {
  isAvailableOptions,
  isPublicisedOptions,
} from "../../../../../../../enums/select";

export const getInputTextsConfig = (newProduct) => [
  {
    id: "0",
    name: "title",
    value: newProduct.title,
    type: "text",
    placeholder: "Nom du produit (ex: Super Burger)",
    Icon: <FaHamburger />,
    version: "minimalist",
    className: "title",
  },
  {
    id: "1",
    name: "imageSource",
    value: newProduct.imageSource,
    type: "url",
    placeholder:
      "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)",
    Icon: <BsFillCameraFill />,
    version: "minimalist",
    className: "image-source",
  },
  {
    id: "2",
    name: "price",
    value: newProduct.price ? newProduct.price : "",
    type: "text",
    placeholder: "Prix",
    Icon: <MdOutlineEuro />,
    version: "minimalist",
    className: "price",
  },
];

export const getSelectConfig = (newProduct) => [
  {
    id: "3",
    name: "isAvailable",
    value: newProduct.isAvailable,
    type: "select",
    options: isAvailableOptions,
    Icon: <FiPackage />,
    version: "minimalist",
    className: "is-available",
  },
  {
    id: "4",
    name: "isPublicised",
    value: newProduct.isPublicised,
    type: "select",
    options: isPublicisedOptions,
    Icon: <GoMegaphone />,
    version: "minimalist",
    className: "is-publicised",
  },
];
