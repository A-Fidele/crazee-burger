import { styled } from "styled-components";

export default function Logo() {
  return (
    <LogoStyled>
        logo
    </LogoStyled>
  )
}

const LogoStyled = styled.div`
  background-image: url('./../images/F03 burger-orange.jpg');
  height: 115px;
  color: white;
  //position: absolute;
`;