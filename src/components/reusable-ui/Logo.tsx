import styled from "styled-components";
import { theme } from "../../theme";

type LogoType = {
  className: string,
  onClick?: () => void,
}

export default function Logo({ className, onClick }: LogoType) {
  return (
    <LogoStyled className={className} onClick={onClick}>
      <h1>CRAZEE</h1>
      <img src="/images/logo-orange.png" alt="logo-crazee-burger" />
      <h1>BURGER</h1>
    </LogoStyled>
  );
}

const LogoStyled = styled.div`
  display: flex;
  align-items: center;

  h1 {
    display: inline;
    text-align: center;
    color: ${theme.colors.primary};
    font-size: ${theme.fonts.size.P4};
    line-height: 1em;
    font-weight: ${theme.fonts.weights.bold};
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-family: ${theme.fonts.family.Amatic}, cursive;
  }

  img {
    object-fit: contain;
    object-position: center;
    height: 60px;
    width: 80px; // for Safari and Firefox
    margin: 0 ${theme.gridUnit / 2}px;
  }
`;
