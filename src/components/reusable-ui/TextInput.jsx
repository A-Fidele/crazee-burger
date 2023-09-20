import styled, { css } from "styled-components";
import { theme } from "../../theme";

export default function TextInput({
  value,
  onChange,
  Icon,
  type,
  className,
  version = "classic",
  ...extraProps
}) {
  return (
    <InputStyled className={className} version={version}>
      {Icon && Icon}
      <input onChange={onChange} type={type} {...extraProps} />
    </InputStyled>
  );
}

const InputStyled = styled.div`
  /* ${(props) => props.version === "classic" && extraStyleCassic};
  ${(props) => props.version === "darklight" && extraStyleDarklight}; */

  ${(props) => extraStyle[props.version]}
`;

const extraStyleCassic = css`
  background-color: #fff;
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

  .icon {
    font-size: ${theme.fonts.size.SM};
    margin-right: 13px;
    margin-left: 24px;
    color: ${theme.colors.greyDark};
  }

  input {
    border: none;
    font-size: ${theme.fonts.size.SM};
    color: ${theme.colors.dark};
    width: 85%;
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
