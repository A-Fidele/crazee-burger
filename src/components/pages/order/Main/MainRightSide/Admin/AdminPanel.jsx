import styled from "styled-components";
import { theme } from "../../../../../../theme";
import { useContext } from "react";
import { getTabSelected, getTabsConfig } from "./Form/getTabsConfig";
import UserContext from "../../../../../../context/UserContext";
import { EMPTY_PRODUCT } from "../../../../../../enums/product";

export default function Panel() {
  const { currentTabSelected, productSelected } = useContext(UserContext);

  const hasAlreadyBeenClicked = productSelected !== EMPTY_PRODUCT;
  const tabs = getTabsConfig(hasAlreadyBeenClicked);
  const tabSelected = getTabSelected(tabs, currentTabSelected);

  return (
    <AdminPanelStyled>{tabSelected && tabSelected.Content}</AdminPanelStyled>
  );
}
const AdminPanelStyled = styled.div`
  height: 250px;
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
  padding: 30px 5%;
  box-sizing: border-box;
  z-index: 4;
`;
