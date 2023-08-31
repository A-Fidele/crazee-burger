import styled from "styled-components";
import { theme } from "../../../../../../theme";
import { useContext } from "react";
import { getTabSelected, tabsConfig } from "./tabsConfig";
import Usercontext from "../../../../../../context/UserContext";

export default function Panel() {
  const { currentTabSelected } = useContext(Usercontext)

  const tabs = tabsConfig;
  const tabSelected = getTabSelected(tabs, currentTabSelected);

  return (
    <AdminPanelStyled>
      <p>{tabSelected && tabSelected.label}</p>
    </AdminPanelStyled>
  )
}
const AdminPanelStyled = styled.div`
  height: 250px;
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};

  p {
    padding: 0 20px;
  }
`