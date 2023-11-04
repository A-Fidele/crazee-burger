import React from "react";
import { useContext } from "react";
import TextInput from "../../../../../reusable-ui/TextInput";
import PrimaryButton from "../../../../../reusable-ui/PrimaryButton";
import { styled } from "styled-components";
import { theme } from "../../../../../../theme";
import UserContext from "../../../../../../context/UserContext";
import { getInputTextsConfig } from "./inputTextsConfig";
import SubmitMessage from "./SubmitMessage";
import ImagePreview from "./ImagePreview";
import { EMPTY_PRODUCT } from "../../../../../../enums/product";
import { useSuccessMessage } from "../../../../../../hooks/useSuccessMessage";
import { replaceFrenchCommaWithDot } from "../../../../../../utils/maths";

export default function AddForm() {
  const { handleAddProduct, newProduct, setNewProduct, username } =
    useContext(UserContext);
  const { isSuccess, displaySuccessMessage } = useSuccessMessage();

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
      price: replaceFrenchCommaWithDot(newProduct.price),
    };

    handleAddProduct(username, newProductToAdd);
    setNewProduct(EMPTY_PRODUCT); // remise a 0 des champs

    displaySuccessMessage();
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
        <select name="isAvailable" id="is-available">
          <option value={true}>En stock</option>
          <option value={false}>Rupture</option>
        </select>
        <select name="isPublished" id="is-published">
          <option value={true}>Pub</option>
          <option value={false}>Sans pub</option>
        </select>
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
    grid-area: 1/2/4/3;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-row-gap: 8px;
    grid-column-gap: 8px;
  }

  .title {
    grid-area: 1/1/2/4;
  }

  .image-source {
    grid-area: 2/1/3/4;
  }

  .price {
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
    width: 62%;
  }
`;
