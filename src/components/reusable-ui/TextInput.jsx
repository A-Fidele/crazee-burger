import styled, { css } from "styled-components";
import { theme } from "../../theme";
import React from "react";

const TextInput = React.forwardRef(
  (
    { value, onChange, Icon, className, version = "classic", ...extraProps },
    ref
  ) => {
    return (
      <TextInputStyled className={className} version={version}>
        <div className="icon">{Icon && Icon}</div>
        <input
          ref={ref}
          value={value}
          onChange={onChange}
          type="text"
          {...extraProps}
        />
      </TextInputStyled>
    );
  }
);

const TextInputStyled = styled.div`
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
//dictionnaire
const extraStyle = {
  classic: extraStyleCassic,
  darklight: extraStyleDarklight,
};

export default TextInput;
