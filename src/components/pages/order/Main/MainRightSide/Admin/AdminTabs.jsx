import { useContext } from "react";
import Tab from "../../../../../reusable-ui/Tab";
import Usercontext from "../../../../../../context/UserContext";
import styled from "styled-components";
import { theme } from "../../../../../../theme";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import { getTabsConfig } from "./Form/getTabsConfig";

export default function AdminTabs() {
  const {
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
  } = useContext(Usercontext);

  const selectTab = (tabSelected) => {
    setIsCollapsed(false);
    setCurrentTabSelected(tabSelected);
  };

  const tabs = getTabsConfig();
  return (
    <AdminTabsStyled>
      <Tab
        index="chevron"
        label=""
        Icon={isCollapsed ? <FiChevronUp /> : <FiChevronDown />}
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={isCollapsed ? "is-active" : ""}
      />{" "}
      {tabs.map((tab) => (
        <Tab
          key={tab.index}
          index={tab.index}
          label={tab.label}
          Icon={tab.Icon}
          onClick={() => selectTab(tab.index)}
          className={currentTabSelected === tab.index ? "is-active" : ""}
        />
      ))}
    </AdminTabsStyled>
  );
}

const AdminTabsStyled = styled.div`
  display: flex;
  position: absolute;
  top: -43px;
  left: 5%;
  z-index: 4;
  .is-active {
    background-color: ${theme.colors.background_dark};
    border-color: ${theme.colors.background_dark};
    color: ${theme.colors.white};
  }

  button {
    margin-left: 1px;
  }
`;
