import { styled } from "styled-components";
import { theme } from "../../../../theme/design";

export default function Navbar(props) {
  return (
    <NavbarStyled>
        {props.logo}
        {props.user}
    </NavbarStyled>
  )
}
const NavbarStyled = styled.div`
  height: 15vh;
  border-radius: ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound} 0px 0px;
  background-color: ${theme.colors.background_white};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  `;