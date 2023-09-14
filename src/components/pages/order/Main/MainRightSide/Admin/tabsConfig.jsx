import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";


export const tabsConfig = [
  {
    index: "add",
    label: "Ajouter un produit",
    Icon: <AiOutlinePlus />,
    infoProduct: [
      {
        addIndex: 1,
        addIcon: <FaHamburger />,
        addPlaceholder: "Nom du produit (ex: Super Burger)",
      },
      {
        addIndex: 2,
        addIcon: <BsFillCameraFill />,
        addPlaceholder: "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)",
      },
      {
        addIndex: 3,
        addIcon: <MdOutlineEuro />,
        addPlaceholder: "Prix",
      },
    ]
  },
  {
    index: "edit",
    label: "Modifier un produit",
    Icon: <MdModeEditOutline />,
  },
];

export const getTabSelected = (tabs, currentTabSelected) => {
  return tabs.find((tab) => tab.index === currentTabSelected);
};
