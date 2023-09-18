import styled from "styled-components";
import { theme } from "../../../../../../theme";
import { useContext } from "react";
import { getTabSelected, tabsConfig } from "./tabsConfig";
import UserContext from "../../../../../../context/UserContext";
import AddForm from "./AddForm";


export default function Panel() {
  const { currentTabSelected, menu, handleAddProduct } = useContext(UserContext);

  const tabs = tabsConfig;
  const tabSelected = getTabSelected(tabs, currentTabSelected);

  return (
    <AdminPanelStyled>
      {/* <p>{tabSelected && tabSelected.label}</p> */}
      <AddForm tabSelected={tabSelected} />
    </AdminPanelStyled >
  );
}
const AdminPanelStyled = styled.div`
  height: 250px;
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
  padding: 20px;
  box-sizing: border-box;


`;
