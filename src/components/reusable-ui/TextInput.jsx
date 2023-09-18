import styled from "styled-components"
import { theme } from "../../theme"

export default function TextInput({ value, onChange, Icon, type, className, ...extraProps }) {
  return (
    <InputStyled className={className}>
      {Icon && Icon}
      <input onChange={onChange} type={type} {...extraProps} />
    </InputStyled>
  )
}

const InputStyled = styled.div`
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
`
