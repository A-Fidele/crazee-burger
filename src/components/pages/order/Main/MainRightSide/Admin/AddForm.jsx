import React, { useContext, useState } from "react";
import TextInput from "../../../../../reusable-ui/TextInput";
import PrimaryButton from "../../../../../reusable-ui/PrimaryButton";
import { styled } from "styled-components";
import { theme } from "../../../../../../theme";
import UserContext from "../../../../../../context/UserContext";
import { EMPTY_PRODUCT } from "../../../OrderPage";
import { getInputTextsConfig } from "./inputTextsConfig";
import SubmitMessage from "./SubmitMessage";
import ImagePreview from "./ImagePreview";

export default function AddForm() {
  const [isSuccess, setIsSuccess] = useState("");
  const { handleAddProduct, newProduct, setNewProduct } =
    useContext(UserContext);

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

    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
    }, 2000);
  };

  const inputTexts = getInputTextsConfig(newProduct);

  return (
    <AddFormStyled action="submit" onSubmit={handleSubmit}>
      <ImagePreview src={newProduct.imageSource} alt={newProduct.title} />
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
          className={"add-product-button"}
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

  .add-product-button {
    background-color: ${theme.colors.success};
    border: none;
    height: 34px;
    width: 60%;
    margin-top: 20px;
    font-weight: ${theme.fonts.weights.bold};
    font-size: ${theme.fonts.size.sm};
    padding: 10px, 29px, 9px, 29px;

    &:hover {
      color: white;
    }
    &:active {
      background-color: ${theme.colors.white};
      color: ${theme.colors.success};
      border: 1px solid ${theme.colors.success};
    }
  }
`;
