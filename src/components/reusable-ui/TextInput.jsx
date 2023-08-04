import { styled } from "styled-components";
import { theme } from "../theme/design";

export default function TextInput(value, onChange, Icon, ...restProps) {
    return (
        <InputStyled>
            {Icon}
            <input 
                type="text"
                value={value}
                onChange={onChange}
                {...restProps}
                /> 
        </InputStyled>
    )
}

const InputStyled = styled.div`
        background-color: ${theme.colors.white};
        border-radius: 5px;
        display: flex;
        align-items: center;
        padding: 18px 24px;
        margin: 18px 0;

        .icon {
            font-size: ${theme.fonts.P0};
            margin-right: 8px;
            color: ${theme.colors.greySemiDark};
        }

        input {
        border-radius: 5px;
        border: none;
        background-color: ${theme.colors.white};
        color: ${theme.colors.dark};
        font-size: ${theme.fonts.P0};
        }

        &::placeholder {
            background: ${theme.colors.white};
            color: ${theme.colors.greyLight};
        }
`;