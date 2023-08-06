import { styled } from "styled-components";
import { theme } from "../../theme/design";

export default function Logo(props) {

  return (
    <LogoStyled  onClick={props.reload}>
        <div className={props.className}>
          <h1>CRAZEE </h1>
          <img src="/images/F03 logo-orange.png" />
          <h1>BURGER</h1>
        </div>
    </LogoStyled>
  )
}

const LogoStyled = styled.div`
    color: white;
    font-family: 'Amatic SC', cursive;
    line-height: 1em;
    display: flex;
    flex-direction: row;
    align-items: center;
   
    .logo-order-page {
        display: flex;
        flex-direction: row;
        border: 1px solid black;
        transform: scale(0.5);
        cursor: pointer;
    }
    h1 {
        display: inline;
        text-align: center;
        color: ${theme.colors.primary_burger};
        font-weight: ${theme.weights.bold};
        font-size: ${theme.fonts.P6};
        line-height: 1.5px;
        text-transform: uppercase;
        letter-spacing: 1.5px;
        font-family: "Amatic SC", cursive;
    }
    img {
        object-fit: contain;
        object-position: center;
        width: 150px;
        height: 100px;
        margin: 0 15px;
    }

`;