import React from "react";
import { styled } from "styled-components";
import { theme } from "../../../../../../theme";
import { BsCloudCheck } from "react-icons/bs";

export default function SavedEditMessage() {
  return (
    <SavedEditMessageStyled>
      <div className="icon">
        <BsCloudCheck />
      </div>
      <span className="message">Modifications enregistrées !</span>
    </SavedEditMessageStyled>
  );
}

const SavedEditMessageStyled = styled.div`
  display: grid;
  grid-area: 4/2/4/3;
  color: ${theme.colors.blue};
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: "Open Sans";

  .icon {
    width: 38px;
    height: 18px;
    margin-top: 3px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }
`;
