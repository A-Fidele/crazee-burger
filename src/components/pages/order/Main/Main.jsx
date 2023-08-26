import styled from "styled-components"
import { theme } from "../../../../theme"
import Menu from "./Menu"
import { FiChevronUp } from 'react-icons/fi'
import { AiOutlinePlus } from 'react-icons/ai'
import { MdModeEditOutline } from 'react-icons/md'


export default function Main() {
  return (
    <MainStyled className="main">
      <div className="panel-container">      
        <div className="panel-option">
          <button className="up-down-icon"><FiChevronUp /></button>
          <button className="ajouter-modifier"><AiOutlinePlus /> Ajouter un produit</button>
          <button className="ajouter-modifier"><MdModeEditOutline /> Modifier un produit</button>
        </div>
        <div className="panel">PANEL</div>
    </div>
      <Menu />
    </MainStyled>
  )
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
    background:  ${theme.colors.background_white};

  }
  
  .ajouter-modifier {
    height: 44px;
    background:  ${theme.colors.background_white};

  }
  
  .panel {
    background:  ${theme.colors.background_white};
    width: 100%;
    height: 250px;
  }

  `
