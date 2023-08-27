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
  const [classActionAjout, setClassActionAjout] = useState("ajouter-modifier");
  const [classActionModif, setClassActionModif] = useState("ajouter-modifier");
  const [action, setAction] = useState("");

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

  const handleClickAjouter = () => {
    setAction("Ajouter un produit");
    setClassActionAjout("dark-ajouter-modifier");
    setClassActionModif("ajouter-modifier");
  };

  const handleClickModifier = () => {
    setAction("Modifier un produit");
    setClassActionModif("dark-ajouter-modifier");
    setClassActionAjout("ajouter-modifier");
  };

  return (
    <MainStyled className="main">
        { admin && <Panel
          handleHidePanel={handleHidePanel}
          chevron={chevron}
          handleClickAjouter={handleClickAjouter}
          handleClickModifier={handleClickModifier}
          action={action}
          isPanelVisible={isPanelVisible}
          classIcon={classIcon}
          classActionAjout={classActionAjout}
          classActionModif={classActionModif}
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

  .panel-container {
    grid-row: 2;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 1400px;
  }

  .panel-option {
    background: rgba(255, 0, 0, opacity);
    width: 100%;
    height: 44px;
  }

  .up-down-icon {
    width: 62px;
    height: 43px;
    margin-left: 71px;
    background: ${theme.colors.background_white};
  }

  .dark-up-down-icon {
    width: 62px;
    height: 43px;
    margin-left: 71px;
    color: ${theme.colors.white};
    background: ${theme.colors.background_dark};
  }

  .ajouter-modifier {
    height: 44px;
    background: ${theme.colors.background_white};
  }

  .dark-ajouter-modifier {
    height: 44px;
    color: ${theme.colors.white};
    background: ${theme.colors.background_dark};
  }

  .panel {
    background: ${theme.colors.background_white};
    width: 100%;
    height: 250px;
  }
`;
