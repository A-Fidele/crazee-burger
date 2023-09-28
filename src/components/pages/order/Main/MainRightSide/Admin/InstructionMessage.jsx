import React from "react";
import { styled } from "styled-components";
import { theme } from "../../../../../../theme";

export default function InstructionMessage() {
  return (
    <InstructionMessageStyled>
      <span>
        Cliquer sur un produit pour le modifier{" "}
        <span className="underline">en temps réel</span>
      </span>
    </InstructionMessageStyled>
  );
}

const InstructionMessageStyled = styled.div`
  display: grid;
  grid-area: 4/2/4/3;
  color: ${theme.colors.primary};

  .underline {
    text-decoration: underline;
  }
`;
