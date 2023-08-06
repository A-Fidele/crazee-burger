import { styled } from "styled-components";
import { theme } from "../../../theme/design";

export default function Main() {
  return (
    <MainStyled>

    </MainStyled>
  )
}

const MainStyled = styled.div`
  background-color: ${theme.colors.background_white};
  width: 1400px;
  height: 840px;
  box-shadow: 0px 8px 20px 8px rgba(0,0,0,0.2) inset;
  border-radius: 0px 0px ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};

`;