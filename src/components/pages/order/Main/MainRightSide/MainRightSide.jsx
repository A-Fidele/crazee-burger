import { useContext } from "react";
import UserContext from "../../../../../context/UserContext";
import Menu from "../Menu";
import { theme } from "../../../../../theme";
import styled from "styled-components";
import Admin from "./Admin/Admin";

export default function MainRightSide() {
  const { isAdmin } = useContext(UserContext);

  return (
    <MainRightSideStyles>
      <Menu />
      {isAdmin && <Admin />}
    </MainRightSideStyles>
  );
}

const MainRightSideStyles = styled.div`
  position: relative;
  overflow-y: hidden;
  display: grid;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
`;
