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
