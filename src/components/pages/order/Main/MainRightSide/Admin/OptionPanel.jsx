import { useContext } from "react";
import Option from "../../../../../reusable-ui/Option";
import Usercontext from "../../../../../../context/UserContext";
import styled from "styled-components";
import { theme } from "../../../../../../theme";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import { tabsConfig } from "./tabsConfig";

export default function OptionPanel() {
  const {
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
  } = useContext(Usercontext);

  const selectTab = (tabSelected) => {
    setIsCollapsed(true);
    setCurrentTabSelected(tabSelected);
  };

  const tabs = tabsConfig;

  return <OptionPanelStyled>
     <Option
        index="chevron"
        label=""
        Icon={isCollapsed ? <FiChevronDown /> : <FiChevronUp />}
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={!isCollapsed ? "is-active" : "not-active"}
      />
      {tabs.map((tab) => (
        <Option
          key={tab.index}
          index={tab.index}
          label={tab.label}
          Icon={tab.Icon}
          onClick={() => selectTab(tab.index)}
          className={currentTabSelected === tab.index ? "is-active" : "not-active"}
        />
      ))}
  </OptionPanelStyled>;
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
    height: 43px;
    padding: 0 22px;
  }
  
  .not-active {
    padding: 0 22px;
  }

  button {
    margin-left: 1px;
    border: none;
    background: ${theme.colors.white};
    color: ${theme.colors.greySemiDark};
    cursor: pointer;
  }
`;