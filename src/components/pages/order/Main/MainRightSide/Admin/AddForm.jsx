import React, { useContext, useState } from "react";
import TextInput from "../../../../../reusable-ui/TextInput";
import PrimaryButton from "../../../../../reusable-ui/PrimaryButton";
import { FiCheck } from "react-icons/fi";
import { styled } from "styled-components";
import { theme } from "../../../../../../theme";
import UserContext from "../../../../../../context/UserContext";
import { emptyProduct } from "../../../OrderPage";

export default function AddForm({ tabSelected }) {
  const [txtField, setTxtField] = useState("");
  const [isSuccess, setIsSuccess] = useState("");
  const { handleAddProduct, newProduct, setNewProduct } =
    useContext(UserContext);

  const handleChange = (e) => {
    const productBeingChanged = {
      ...newProduct,
      [e.target.name]: [e.target.value],
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
    setNewProduct(emptyProduct);
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
    }, 2000);
  };

  const inputFields = tabSelected.infoProduct.map((field) => {
    return (
      <TextInput
        key={field.addIndex}
        Icon={field.addIcon}
        name={field.name}
        type={field.type}
        placeholder={field.addPlaceholder}
        version={"darklight"}
        onChange={handleChange}
        value={txtField}
      />
    );
  });

  return (
    <AddFormStyled action="submit" onSubmit={handleSubmit}>
      <div className="image-preview">
        {newProduct.imageSource ? (
          <img src={newProduct.imageSource} alt={newProduct.title} />
        ) : (
          "Aucune Image"
        )}
      </div>
      <div className="input-fields">{inputFields}</div>
      <div className="submit-button">
        <PrimaryButton
          className={"add-product-button"}
          label="Ajouter un nouveau produit au menu"
        />
        <span className="success-message">
          {isSuccess && (
            <span>
              {" "}
              <FiCheck /> Ajouté avec succès !
            </span>
          )}
        </span>
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

  .image-preview {
    grid-area: 1/1/4/2;
    margin-right: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${theme.colors.greyLight};
    line-height: 1.5;
    color: ${theme.colors.greySemiDark};
    border-radius: ${theme.borderRadius.round};
    justify-self: center;
    width: 100%;
    height: 100%;
    img {
      object-fit: contain;
      object-position: center;
      width: 100%;
      height: 100%;
    }
  }

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

  .success-message {
    color: ${theme.colors.green};
    margin-left: 5px;
    font-size: ${theme.fonts.size.SM};
    font-weight: ${theme.fonts.weights.regular};
  }
`;