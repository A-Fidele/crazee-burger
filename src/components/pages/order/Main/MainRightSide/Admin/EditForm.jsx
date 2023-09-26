import React, { useContext, useRef, useState } from "react";
import { styled } from "styled-components";
import { theme } from "../../../../../../theme";
import ImagePreview from "./ImagePreview";
import TextInput from "../../../../../reusable-ui/TextInput";
import UserContext from "../../../../../../context/UserContext";
import { getInputTextsConfig } from "./inputTextsConfig";

export default function EditForm() {
  const { productSelected, setProductSelected, handleEdit, inputEditRef } =
    useContext(UserContext);
  const inputTexts = getInputTextsConfig(productSelected);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const productUpdated = { ...productSelected, [name]: value };

    setProductSelected(productUpdated); //update affichage
    handleEdit(productUpdated); //update menu
  };

  return (
    <EditFormStyled>
      {/* <span className="titre">Cliquer sur le produit pour le modifier</span>
      <HiCursorClick className="Icon" /> */}

      <ImagePreview
        imageSource={productSelected.imageSource}
        title={productSelected.title}
      />
      <div className="input-fields">
        {inputTexts.map((input) => {
          return (
            <TextInput
              key={input.id}
              {...input}
              onChange={handleChange}
              version="darklight"
              ref={input.name === "title" ? inputEditRef : null}
            />
          );
        })}
      </div>
      <div className="consigne">
        <span>Cliquer sur un produit pour le modifier en temps réel</span>
      </div>
    </EditFormStyled>
  );
}

const EditFormStyled = styled.div`
  width: 70%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 8px;

  .input-fields {
    grid-area: 1/2/4/2;
    display: grid;
    grid-row-gap: 8px;
  }

  .submit-button {
    grid-area: 4/2/5/3;
  }

  .input-field-classname {
    background-color: ${theme.colors.background_white};
    &::placeholder {
      background-color: ${theme.colors.greyLight};
    }
  }
`;
