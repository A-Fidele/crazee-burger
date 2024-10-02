import React, { FormEventHandler } from "react";
import ImagePreview from "../ImagePreview";
import styled from "styled-components";
import Inputs from "./Inputs";
import { ProductType } from "../../../../../../../typeScript/ProductType";

type FormProps = {
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void,
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void,
  product: ProductType,
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void,
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void,
  children: JSX.Element,
}
const Form = React.forwardRef(
  ({ onSubmit, onChange, product, onBlur, onFocus, children }: FormProps, ref) => {
    return (
      <FormStyled onSubmit={onSubmit}>
        <ImagePreview imageSource={product.imageSource} title={product.title} />
        <Inputs
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          version="darklight"
          ref={ref}
          product={product}
        />
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

  .form-footer {
    grid-area: 4/2/5/3;
  }
`;
