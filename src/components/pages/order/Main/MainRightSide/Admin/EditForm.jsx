import React, { useContext, useState } from "react";
import { styled } from "styled-components";
import { theme } from "../../../../../../theme";
import ImagePreview from "./ImagePreview";
import TextInput from "../../../../../reusable-ui/TextInput";
import UserContext from "../../../../../../context/UserContext";
import { getInputTextsConfig } from "./inputTextsConfig";
import InstructionMessage from "./InstructionMessage";
import { replaceFrenchCommaWithDot } from "../../../../../../utils/maths";
import SavedEditMessage from "./SavedEditMeessage";
import { useSuccessMessage } from "../../../../../../hooks/useSuccessMessage";

export default function EditForm() {
  const { productSelected, setProductSelected, handleEdit, inputEditRef } =
    useContext(UserContext);
  const { isSuccess, displaySuccessMessage } = useSuccessMessage();
  const [valueOnfocus, setValueOnfocus] = useState();

  const inputTexts = getInputTextsConfig(productSelected);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const productUpdated = {
      ...productSelected,
      [name]: value,
    };

    const productWithPriceUpdated = {
      ...productUpdated,
      price: replaceFrenchCommaWithDot(productUpdated.price),
    };

    setProductSelected(productUpdated); //update affichage
    handleEdit(productWithPriceUpdated); //update menu
  };

  const handleOnFocus = (event) => {
    setValueOnfocus(event.target.value);
  };

  const handleOnBlur = (event) => {
    const valueOnBlur = event.target.value;
    if (valueOnfocus !== valueOnBlur) {
      displaySuccessMessage();
    }
  };

  return (
    <EditFormStyled>
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
              onFocus={handleOnFocus}
              onBlur={handleOnBlur}
              ref={input.name === "title" ? inputEditRef : null}
            />
          );
        })}
      </div>
      {isSuccess ? <SavedEditMessage /> : <InstructionMessage />}
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
