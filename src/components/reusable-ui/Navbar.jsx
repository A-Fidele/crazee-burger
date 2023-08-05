import { styled } from "styled-components";
import { theme } from "../theme/design";
import Logo from "./Logo";

export default function Navbar(props) {
  return (
    <NavbarStyled>
        {props.logo}
        {props.user}
    </NavbarStyled>
  )
}
const NavbarStyled = styled.div`
  height: 100px;
  width: 1400px;
  //border: 2px solid black;
  border-radius: ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound} 0px 0px;
  background-color: ${theme.colors.background_white};
  display: flex;
  flex-direction: row;
  justify-content: space-between;


  .logo {
    margin-left: 20px;
  }
`;