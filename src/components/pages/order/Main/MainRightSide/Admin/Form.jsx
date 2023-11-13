import React from "react";
import { getInputTextsConfig, getSelectConfig } from "./inputTextsConfig";
import ImagePreview from "./ImagePreview";
import TextInput from "../../../../../reusable-ui/TextInput";
import { theme } from "../../../../../../theme";
import styled from "styled-components";
import SelectInput from "../../../../../reusable-ui/SelectInput";

const Form = React.forwardRef(
  ({ onSubmit, onChange, product, onBlur, onFocus, children }, ref) => {
    const inputTexts = getInputTextsConfig(product);
    const inputSelects = getSelectConfig(product);

    return (
      <FormStyled onSubmit={onSubmit}>
        <ImagePreview imageSource={product.imageSource} title={product.title} />
        <div className="input-fields">
          {inputTexts.map((input) => {
            return (
              <TextInput
                key={input.id}
                {...input}
                onChange={onChange}
                onBlur={onBlur}
                onFocus={onFocus}
                version="darklight"
                ref={ref && input.name === "title" ? ref : null}
              />
            );
          })}
          {inputSelects.map((options) => {
            return <SelectInput {...options} onChange={onChange} />;
          })}
        </div>
        <div className="form-footer">{children}</div>
      </FormStyled>
    );
  }
);

export default Form;

const FormStyled = styled.form`
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

  .form-footer {
    grid-area: 4/2/5/3;
  }

  .input-field-classname {
    background-color: ${theme.colors.background_white};
    &::placeholder {
      background-color: ${theme.colors.greyLight};
    }
  }
`;
