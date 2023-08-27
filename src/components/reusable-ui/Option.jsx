import styled from "styled-components";

export default function Option({
    onClick,
    className,
    icon,
    label,
}) {
  return (
    <OptionStyled>
      <button className={className} onClick={onClick}>
        {icon && icon} {label}{" "}
      </button>
    </OptionStyled>
  );
}

const OptionStyled = styled.div`
  
`;
