import { styled } from "styled-components";
import { theme } from "../theme/design";

export default function Logo() {
  return (
    <LogoStyled>
        <h1>CRAZEE</h1> 
        <img src="/images/F03 logo-orange.png" />
        <h1>BURGER</h1>
    </LogoStyled>
  )
}

const LogoStyled = styled.div`
    color: white;
    font-family: 'Amatic SC', cursive;
    display: flex;
    flex-direction: row;
    align-items: center;
    //transform: scale(2.5);

    h1 {
        display: inline;
        color: ${theme.colors.primary_burger};
        font-weight: 700;
        font-size: ${theme.fonts.P4};
        line-height: 1.5px;
        text-transform: uppercase;
        letter-spacing: 1.5px;
    }
    img {
        object-fit: contain;
        object-position: center;
        width: 80px;
        height: 60px;
        margin: 0 15px;
    }

`;