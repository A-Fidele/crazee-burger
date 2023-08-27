import styled from "styled-components";
import { theme } from "../../../../theme";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import Option from "../../../reusable-ui/Option";
import { useState } from "react";

export default function Panel({
  handleHidePanel,
  chevron,
  isPanelVisible,
  classIcon,
}) {
  const [classActionAjout, setClassActionAjout] = useState("ajouter-modifier");
  const [classActionModif, setClassActionModif] = useState("ajouter-modifier");
  const [action, setAction] = useState("");

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
    <PanelStyled>
      <div className="panel-container">
        <div className="panel-option">
          <div className="option">
            <button className={classIcon} onClick={handleHidePanel}>
              {chevron}
            </button>
            <Option
              className={classActionAjout}
              onClick={handleClickAjouter}
              icon={<AiOutlinePlus />}
              label="Ajouter un produit"
            />
            <Option
              className={classActionModif}
              onClick={handleClickModifier}
              icon={<MdModeEditOutline />}
              label="Modifier un produit"
            />
          </div>
        </div>
        {isPanelVisible && <div className="panel"> {action} </div>}
      </div>
    </PanelStyled>
  );
}

const PanelStyled = styled.div`
  grid-row: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 1400px;

  .option {
    display: flex;
    flex-direction: row;
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
    border-radius: ${theme.borderRadius.round} ${theme.borderRadius.round} 0 0;
    border: none;
  }

  .dark-up-down-icon {
    width: 62px;
    height: 43px;
    margin-left: 71px;
    color: ${theme.colors.white};
    background: ${theme.colors.background_dark};
    border-radius: ${theme.borderRadius.round} ${theme.borderRadius.round} 0 0;
    border: none;
  }

  .ajouter-modifier {
    height: 43px;
    width: 220px;
    background: ${theme.colors.background_white};
    font-size: ${theme.fonts.size.P0};
    font-weight: ${theme.fonts.weights.regular};
    color: ${theme.colors.greySemiDark};
    border-radius: ${theme.borderRadius.round} ${theme.borderRadius.round} 0 0;
    border: none;
  }

  .dark-ajouter-modifier {
    height: 43px;
    width: 220px;
    font-size: ${theme.fonts.size.P0};
    border-radius: ${theme.borderRadius.round} ${theme.borderRadius.round} 0 0;
    color: ${theme.colors.white};
    background: ${theme.colors.background_dark};
    border: none;
  }

  .panel {
    background: ${theme.colors.background_white};
    width: 100%;
    height: 250px;
    border-top: 1px solid ${theme.colors.greyLight};
  }
`;
