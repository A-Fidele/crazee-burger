import React, { useContext, useState } from "react";
import TextInput from "../../../../../reusable-ui/TextInput";
import PrimaryButton from "../../../../../reusable-ui/PrimaryButton";
import { styled } from "styled-components";
import { theme } from "../../../../../../theme";
import UserContext from "../../../../../../context/UserContext";
import { getInputTextsConfig } from "./inputTextsConfig";
import SubmitMessage from "./SubmitMessage";
import ImagePreview from "./ImagePreview";
import { EMPTY_PRODUCT } from "../../../../../../enums/product";

export default function AddForm() {
  const [isSuccess, setIsSuccess] = useState("");
  const { handleAddProduct, newProduct, setNewProduct } =
    useContext(UserContext);

  const displaySucessMessage = () => {
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
    }, 2000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const productBeingChanged = {
      ...newProduct,
      [name]: value,
    };

    setNewProduct(productBeingChanged);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newProductToAdd = {
      ...newProduct,
      id: crypto.randomUUID(),
    };

    handleAddProduct(newProductToAdd);
    setNewProduct(EMPTY_PRODUCT); // remise a 0 des champs
    displaySucessMessage();
  };

  const inputTexts = getInputTextsConfig(newProduct);

  return (
    <AddFormStyled action="submit" onSubmit={handleSubmit}>
      <ImagePreview
        imageSource={newProduct.imageSource}
        title={newProduct.title}
      />
      <div className="input-fields">
        {inputTexts.map((input) => {
          return (
            <TextInput
              key={input.id}
              {...input}
              onChange={handleChange}
              version="darklight"
            />
          );
        })}
      </div>
      <div className="submit-button">
        <PrimaryButton
          className={"add-button"}
          version="success"
          label="Ajouter un nouveau produit au menu"
        />
        {isSuccess && <SubmitMessage />}
      </div>
    </AddFormStyled>
  );
}

const AddFormStyled = styled.form`
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

  .add-button {
    width: 50%;
  }
`;
