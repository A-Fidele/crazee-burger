import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import EditForm from "../EditForm/EditForm.js";
import HintMessage from "../EditForm/HintMessage.js";
import AddForm from "../AddForm/AddForm.js";

type GetTabConfigType = {
  index: string,
  label: string,
  Icon: JSX.Element,
  Content: JSX.Element,
}

export const getTabsConfig = (hasAlreadyBeenClicked?: boolean): GetTabConfigType[] => [
  {
    index: "add",
    label: "Ajouter un produit",
    Icon: <AiOutlinePlus />,
    Content: <AddForm />,
  },
  {
    index: "edit",
    label: "Modifier un produit",
    Icon: <MdModeEditOutline />,
    Content: hasAlreadyBeenClicked ? <EditForm /> : <HintMessage />,
  },
];

export const getTabSelected = (tabs: GetTabConfigType[], currentTabSelected: string) => {
  return tabs.find((tab) => tab.index === currentTabSelected);
};
