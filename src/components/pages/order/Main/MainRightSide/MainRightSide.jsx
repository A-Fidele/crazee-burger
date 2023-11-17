import { useContext } from "react";
import UserContext from "../../../../../context/UserContext";
import { theme } from "../../../../../theme";
import styled from "styled-components";
import Admin from "./Admin/Admin";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { adminAnimation } from "../../../../../theme/animations";
import Menu from "./Menu/Menu";

export default function MainRightSide() {
  const { isAdmin } = useContext(UserContext);

  return (
    <MainRightSideStyles>
      <Menu />
      {isAdmin && (
        <TransitionGroup className={"transition-group"}>
          <CSSTransition appear classNames={"panel-animation"} timeout={800}>
            <Admin />
          </CSSTransition>
        </TransitionGroup>
      )}
    </MainRightSideStyles>
  );
}

const MainRightSideStyles = styled.div`
  position: relative;
  overflow-y: hidden;
  display: grid;
  border-bottom-right-radius: ${theme.borderRadius.extraRound};

  ${adminAnimation}
`;
