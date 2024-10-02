import React from "react";
import styled, { css, RuleSet } from "styled-components";
import { theme } from "../../theme";

type TextInputProps = {
  value: string | number,
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void,
  Icon?: JSX.Element,
  className?: string,
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void,
  version?: "classic" | "darklight",
  placeholder?: string,
  required?: boolean,
}

const TextInput = React.forwardRef(
  (
    {
      value,
      onChange,
      Icon,
      className,
      onFocus,
      onBlur,
      version = "classic",
      ...extraProps
    }: TextInputProps,
    ref
  ) => {
    return (
      <TextInputStyled className={className} version={version}>
        <div className="icon">{Icon && Icon}</div>
        <input
          ref={ref}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          type="text"
          {...extraProps}
        />
      </TextInputStyled>
    );
  }
);

const TextInputStyled = styled.div<{ version: "classic" | "darklight" }>`
  ${(props) => extraStyle[props.version]}
`;

const extraStyleCassic = css`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;

  .icon {
    font-size: ${theme.fonts.size.SM};
    margin-right: 8px;
    color: ${theme.colors.greySemiDark};
  }

  input {
    border: none;
    font-size: ${theme.fonts.size.SM};
    color: ${theme.colors.dark};
    width: 100%;

    &::placeholder {
      background: ${theme.colors.white};
      color: ${theme.colors.greyMedium};
    }
  }
`;

const extraStyleDarklight = css`
  background-color: ${theme.colors.background_white};
  border-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;
  padding: 8px 24px;
  color: ${theme.colors.greyBlue};

  .icon {
    font-size: ${theme.fonts.size.SM};
    margin-right: 13px;
    color: ${theme.colors.greyDark};
  }

  input {
    border: none;
    font-size: ${theme.fonts.size.SM};
    color: ${theme.colors.dark};
    width: 90%;
    background: ${theme.colors.background_white};

    &::placeholder {
      color: ${theme.colors.greyMedium};
    }
  }
`;
type ExtraStyleType = {
  [key: string]: RuleSet<object>,
}

//dictionnaire
const extraStyle: ExtraStyleType = {
  classic: extraStyleCassic,
  darklight: extraStyleDarklight,
};

export default TextInput;
