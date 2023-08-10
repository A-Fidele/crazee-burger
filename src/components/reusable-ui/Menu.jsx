import styled from "styled-components";
import { theme } from "../../theme/design";
import SubmitButton from "./SubmitButton";

export default function Menu(props) {

  return (
    <MenuStyled>
        <div className="menu">
        <img src={props.image} />
        <h1>{props.title}</h1>
        <div className="add-section">
          <p className="price">{props.price} €</p>
          <SubmitButton label={'Ajouter'} className={'className'}/>
        </div>
          </div>
    </MenuStyled>
  )
}

const MenuStyled = styled.div`
  background-color: ${theme.colors.background_white};
  width: 240;
  height: 330px;
  //box-shadow: 0px 8px 20px 8px rgba(0,0,0,0.2) inset;
  display: flex;
  border-radius: 0px 0px ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};
  flex-direction: row;
  //flex-wrap: wrap;
  //justify-content: center;
  //align-items: flex-start;
  border: 1px solid black;

 .menu {
  border-radius: ${theme.borderRadius.extraRound};
  width: 240px;
  height: 330px;
  display: flex;
  flex-direction: column;
  box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
  background-color: ${theme.colors.white};
  //margin-left: 90px;
  margin-right: 85px;
  justify-content: center;
  align-items: center;

  img {
    width: 200px;
    height: 145px;
    margin: 20, 50, 20, 135;
  }

  h1 {
    font-size: ${theme.fonts.P4};
    font-family: "Amatic SC", cursive;
  }

  .add-section {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 190px;
    height: 46px;
    
    p {
      color: ${theme.colors.primary_burger};
      font-size: ${theme.weights.bold};
    }
  }
  
  .className {
        background-color: ${theme.colors.primary_burger};
        width: 95px;
        height: 38px;
        border-radius: 5px;
        border: none;
        color: ${theme.colors.white};
        font-size: ${theme.fonts.P0};
        font-weight: ${theme.weights.bold};
        font-family: 'Arial';
        display: flex;
        justify-content: center;
        align-items: center;

        &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
        &:hover:not(:disabled) {
        background-color: ${theme.colors.white};
        border: 1px solid ${theme.colors.primary_burger};
        color: ${theme.colors.primary_burger};
        transition: all 200ms ease-out;
        cursor: pointer;
        }
        &:active {
        background-color: ${theme.colors.primary_burger};
        border: 1px solid ${theme.colors.white};
        color: ${theme.colors.white};
        cursor: pointer;
        }
  }
}
     
`;
