import styled from "styled-components";
import { theme } from "../../../../theme";
import Menu from "./Menu";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import { useContext, useState } from "react";
import Panel from "./Panel";
import UserContext from "../../../../context/Usercontext";

export default function Main() {
  
  const [isPanelVisible, setIsPanelVisible] = useState(false);
  const [chevron, setChevron] = useState(<FiChevronUp />);
  const [classIcon, setClassIcon] = useState("up-down-icon");

  const { admin, setAdmin } = useContext(UserContext);

  //panel pcipal
  const handleHidePanel = () => {
    if (isPanelVisible) {
      setIsPanelVisible(false);
      setChevron(<FiChevronUp />);
      setClassIcon("dark-up-down-icon");
    } else {
      setIsPanelVisible(true);
      setChevron(<FiChevronDown />);
      setClassIcon("up-down-icon");
    }
  };

  return (
    <MainStyled className="main">
        { admin && <Panel
          handleHidePanel={handleHidePanel}
          chevron={chevron}
          isPanelVisible={isPanelVisible}
          classIcon={classIcon}
        />}
        <Menu />
    </MainStyled>
  );
}

const MainStyled = styled.div`
  background: ${theme.colors.background_white};
  flex: 1; // or you can also use this : height: calc(95vh - 10vh);

  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;

  display: grid;
  grid-template-columns: 1fr;
  overflow-y: scroll;

 
`;