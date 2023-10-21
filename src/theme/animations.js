import { CSS } from "styled-components"

export const adminAnimation = CSS`
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
`;