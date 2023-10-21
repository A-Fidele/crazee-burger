import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "styled-components";

export default function CasinoEffect({ count, className, text }) {
  return (
    <TransitionGroup
      component={CasinoEffectStyled}
      className={"transition-group"}
    >
      <CSSTransition classNames={"count-animation"} timeout={300} key={count}>
        <span className={className}>
          {" "}
          {text} {count}
        </span>
      </CSSTransition>
    </TransitionGroup>
  );
}

const CasinoEffectStyled = styled.div`
  position: relative;
  overflow-y: hidden;
  span {
    display: inline-block;
  }
  .count-animation-enter {
    transform: translateY(100%);
  }
  .count-animation-enter-active {
    transform: translateY(0%);
    transition: 300ms;
  }
  .count-animation-exit {
    transform: translateY(0%);
    position: absolute;
    //left: 0;
    right: 0;
    bottom: 0;
  }
  .count-animation-exit-active {
    transform: translateY(-100%);
    transition: 300ms;
  }
`;
