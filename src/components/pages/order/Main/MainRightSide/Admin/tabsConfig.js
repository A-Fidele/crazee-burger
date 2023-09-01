import { AiOutlinePlus } from "react-icons/ai";
import { FiChevronDown } from "react-icons/fi";
import { MdModeEditOutline } from "react-icons/md";

// export const tabsConfig = [
//   {
//     index: "add",
//     label: "Ajouter un produit",
//     Icon: <FiChevronDown />,
//   },
//   {
//     index: "edit",
//     label: "Modifier un produit",
//     Icon: <MdModeEditOutline />,
//   },
// ]

export const getTabSelected = (tabs, currentTabSelected) => {
  return tabs.find((tab) => tab.index === currentTabSelected)
}
