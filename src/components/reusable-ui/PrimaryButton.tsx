import styled, { css, RuleSet } from "styled-components";
import { theme } from "../../theme";

type PrimaryButtonProps = {
  label: string,
  Icon?: JSX.Element,
  className: string,
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
  version?: "classic" | "success",
  disabled?: boolean,
}

export default function PrimaryButton({
  label,
  Icon,
  className,
  onClick,
  version = "classic",
  disabled,
}: PrimaryButtonProps) {
  return (
    <PrimaryButtonStyled
      className={className}
      onClick={onClick}
      version={version}
      disabled={disabled}
    >
      <span>{label}</span>
      {Icon && Icon}
    </PrimaryButtonStyled>
  );
}

const PrimaryButtonStyled = styled.button<{ version: "classic" | "success" }>`
  ${({ version }) => extraStyle[version]}
`;
const extraStyleClassic = css`
  width: 100%;
  border: 1px solid red;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  white-space: nowrap;
  text-decoration: none;
  line-height: 1;
  cursor: pointer;

  padding: 18px 24px;
  border-radius: ${theme.borderRadius.round};
  font-size: 15px;
  font-weight: 800;
  color: white;
  background-color: ${theme.colors.primary};
  border: 1px solid ${theme.colors.primary};

  &:hover {
    color: ${theme.colors.primary};
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.primary};
    transition: all 200ms ease-out;
  }
  &:active {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
  }

  &:disabled {
    opacity: 50%;
    cursor: not-allowed;
    z-index: 2;
  }

  &.with-focus {
    border: 1px solid white;
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary};
    :hover {
      color: ${theme.colors.white};
      background-color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.white};
    }
    :active {
      background-color: ${theme.colors.white};
      color: ${theme.colors.primary};
    }
  }
`;
const extraStyleSuccess = css`
  background-color: ${theme.colors.success};
  border: none;
  height: 35px;
  color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.round};
  font-weight: ${theme.fonts.weights.bold};
  font-size: ${theme.fonts.size.SM};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 10px 25px 9px 25px;

  &:hover {
    color: ${theme.colors.success};
    background-color: ${theme.colors.white};
    border: 1px solid green;
    cursor: pointer;
  }
  &:active {
    background-color: ${theme.colors.success};
    color: ${theme.colors.white};
  }
`;

type ExtraStyleType = {
  [key: string]: RuleSet<object>,
}
const extraStyle: ExtraStyleType = {
  classic: extraStyleClassic,
  success: extraStyleSuccess,
};
