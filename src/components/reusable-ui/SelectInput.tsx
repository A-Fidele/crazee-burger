import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

type OptionType = {
  value: string;
  label: string;
};

type SelectInputTypes = {
  name: string,
  id: string,
  className: string,
  options: OptionType[],
  Icon: JSX.Element,
  value: string,
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void,
  onFocus: (e: React.FocusEvent<HTMLSelectElement>) => void,
  onBlur: (e: React.FocusEvent<HTMLSelectElement>) => void,

}
export default function SelectInput({
  name,
  id,
  className,
  options,
  Icon,
  value,
  onChange,
  onFocus,
  onBlur,
  ...restProps
}: SelectInputTypes) {
  return (
    <SelectInputStyled className={className}>
      <div className="icon">{Icon}</div>
      <select
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        {...restProps}
      >
        {options.map(({ value, label }) => {
          return (
            <option key={label} value={value}>
              {" "}
              {label}
            </option>
          );
        })}
      </select>
    </SelectInputStyled>
  );
}

const SelectInputStyled = styled.div`
  display: flex;
  align-items: center;
  background-color: ${theme.colors.background_white};
  border-radius: ${theme.borderRadius.round};
  padding: 8px 16px;

  .icon {
    display: flex;
    margin-right: 13px;
    color: ${theme.colors.greyBlue};
  }

  select {
    border: none;
    background-color: ${theme.colors.background_white};
    font-size: ${theme.fonts.size.SM};
    width: 100%;
    outline: 0;
  }
`;
