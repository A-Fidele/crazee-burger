import React from "react";
import styled from "styled-components";
import TextInput from "../../../../../../reusable-ui/TextInput";
import SelectInput from "../../../../../../reusable-ui/SelectInput";
import { theme } from "../../../../../../../theme";
import { getInputTextsConfig, getSelectConfig } from "./inputTextsConfig";
import { ProductType } from "../../../../../../../typeScript/ProductType";

type InputsProps = {
  product: ProductType,
  onChange: (e: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => void,
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void,
  onFocus: (e: React.FocusEvent<HTMLInputElement>) => void,
  version: "classic" | "darklight",
}

const Inputs = React.forwardRef<HTMLInputElement, InputsProps>(
  ({ product, onChange, onBlur, onFocus, version }: InputsProps, ref) => {
    const inputTexts = getInputTextsConfig(product);
    const inputSelects = getSelectConfig(product);

    return (
      <InputsStyled>
        {inputTexts.map((input) => {
          return (
            <TextInput
              key={input.id}
              {...input}
              onChange={onChange}
              onBlur={onBlur}
              onFocus={onFocus}
              version={version}
              ref={ref && input.name === "title" ? ref : null}
            />
          );
        })}
        {inputSelects.map((options) => {
          return <SelectInput {...options} onChange={onChange} />;
        })}
      </InputsStyled>
    );
  }
);

export default Inputs;

const InputsStyled = styled.div`
  grid-area: 1/2/4/3;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-row-gap: 8px;
  grid-column-gap: 8px;

  .title {
    grid-area: 1/1/2/4;
  }

  .image-source {
    grid-area: 2/1/3/4;
  }

  .input-field-classname {
    background-color: ${theme.colors.background_white};
    &::placeholder {
      background-color: ${theme.colors.greyLight};
    }
  }
`;
