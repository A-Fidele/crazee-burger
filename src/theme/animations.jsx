import { keyframes, css } from "styled-components";

export const adminAnimation = css`
  .panel-animation-appear {
    transform: translateY(100%);
    opacity: 0%;
  }
  .panel-animation-appear-active {
    transform: translateY(0%);
    opacity: 100%;
    transition: 500ms;
  }
  .panel-animation-enter {
    transform: translateY(100%);
  }
  .panel-animation-enter-active {
    transition: 500ms;
    transform: translateY(0%);
  }
`;

export const basketCardsAnimation = css`
  .card-container-appear {
    transform: translateX(200px);
    opacity: 0%;
  }
  .card-container-appear-active {
    transform: translateX(0px);
    transition: 0.5s;
    opacity: 100%;
  }

  .card-container-enter {
    transform: translateX(200px);
    opacity: 0%;
  }
  .card-container-enter-active {
    transform: translateX(0px);
    transition: 0.5s;
    opacity: 100%;
  }

  .card-container-exit {
    transform: translateX(0px);
    opacity: 100%;
  }
  .card-container-exit-active {
    transform: translateX(-200px);
    transition: 1s;
    opacity: 0%;
  }
`;

export const fadeInRight = keyframes`
 0% {
     position: absolute;
     z-index: -1;
     opacity: 0;
     transform: translateX(100%);
 }

 100% {
     opacity: 1;
     transform: translateX(0%);
 }
 `;

export const emptyBasketAnimation = keyframes`
0% {
     opacity: 0;
 }

 100% {
     opacity: 1;
 }
 `;
