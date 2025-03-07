import { styled } from "styled-components";
import Logo from "../../../reusable-ui/Logo";
import NavbarRightSide from "./NavbarRightSide";
import { refreshPage } from "../../../../utils/window";
import { theme } from "../../../../theme";

type NavBarProps = {
  username: string,
}

export default function Navbar({ username }: NavBarProps) {
  return (
    <NavbarStyled>
      <Logo className="logo-order-page" onClick={() => refreshPage()} />
      <NavbarRightSide username={username} />
    </NavbarStyled>
  )
}

const NavbarStyled = styled.nav`
  background: ${theme.colors.white};
  height: 10vh;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;

  border-top-left-radius: ${theme.borderRadius.extraRound};
  border-top-right-radius: ${theme.borderRadius.extraRound};
  border-bottom: 1px solid ${theme.colors.greyLight};

  .logo-order-page {
    cursor: pointer;
  }
`
