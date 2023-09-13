import { useContext } from "react";
import Option from "../../../../../reusable-ui/Tab";
import Usercontext from "../../../../../../context/UserContext";
import styled from "styled-components";
import { theme } from "../../../../../../theme";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import { tabsConfig } from "./tabsConfig";

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

  const tabs = tabsConfig;
  return (
    <OptionPanelStyled>
      <Option
        index="chevron"
        label=""
        Icon={isCollapsed ? <FiChevronUp /> : <FiChevronDown />}
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={isCollapsed ? "is-active" : ""}
      />{" "}
      {tabs.map((tab) => (
        <Option
          key={tab.index}
          index={tab.index}
          label={tab.label}
          Icon={tab.Icon}
          onClick={() => selectTab(tab.index)}
          className={
            currentTabSelected === tab.index ? "is-active" : ""
          }
        />
      ))}
    </OptionPanelStyled>
  );
}

const OptionPanelStyled = styled.div`
  display: flex;
  position: absolute;
  top: -43px;
  left: 5%;

  .is-active {
    background-color: ${theme.colors.background_dark};
    border-color: ${theme.colors.background_dark};
    color: ${theme.colors.white};
  }

  button {
    margin-left: 1px;
  }
`;
