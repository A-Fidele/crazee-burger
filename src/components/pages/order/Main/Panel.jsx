import styled from "styled-components";
import { theme } from "../../../../theme";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";

export default function Panel({
  handleHidePanel,
  handleClickAjouter,
  handleClickModifier,
  chevron,
  action,
  isPanelVisible,
  classIcon,
  classActionAjout,
  classActionModif,
}) {
  

  return (
    <PanelStyled>
      <div className="panel-container">
        <div className="panel-option">
          <button className={classIcon} onClick={handleHidePanel}>
            {chevron}
          </button>
          <button className={classActionAjout} onClick={handleClickAjouter}>
            <AiOutlinePlus /> Ajouter un produit{" "}
          </button>
          <button className={classActionModif} onClick={handleClickModifier}>
            <MdModeEditOutline /> Modifier un produit{" "}
          </button>
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
