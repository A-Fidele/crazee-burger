import styled from "styled-components";
import AdminPanel from "./AdminPanel";
import { useContext } from "react";
import UserContext from "../../../../../../context/UserContext";
import AdminTabs from "./AdminTabs";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export default function Admin() {
  const { isCollapsed } = useContext(UserContext);
  return (
    <TransitionGroup component={AdminStyled} className={"transition-group"}>
      <CSSTransition appear={true} classNames={"tab-animation"} timeout={1000}>
        <AdminTabs />
      </CSSTransition>
      <CSSTransition
        appear={true}
        classNames={"panel-animation"}
        timeout={1000}
      >
        {!isCollapsed && <AdminPanel />}
      </CSSTransition>
    </TransitionGroup>
  );
}

const AdminStyled = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  .panel-animation-appear {
    transform: translateY(100%);
    opacity: 0%;
  }
  .panel-animation-appear-active {
    transform: translateY(0%);
    opacity: 100%;
    transition: 1s;
  }

  .panel-animation-enter {
    transform: translateY(100%);
  }
  .panel-animation-enter-active {
    transition: 1s;
    transform: translateY(0%);
  }
  .panel-animation-exit {
  }
  .panel-animation-exit-active {
  }
  .panel-animation-exit-done {
  }
  .tab-animation-appear {
    opacity: 0%;
    transform: translateY(580%);
  }
  .tab-animation-appear-active {
    transform: translateY(0%);
    transition: 1s;
    opacity: 100%;
  }
  .tab-animation-enter {
  }
  .tab-animation-enter-active {
    transition: 2s;
  }
  .tab-animation-enter-done {
  }
`;
