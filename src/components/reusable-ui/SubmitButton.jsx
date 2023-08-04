import { styled } from "styled-components";
import { theme } from "../theme/design";


export default function SubmitButton(props) {
    return (
        <SubmitButtonStyled >
            <span>{props.label}</span>
            {props.IconButton}
        </SubmitButtonStyled>
    )
}

const SubmitButtonStyled = styled.button`
   
        background-color: ${theme.colors.primary_burger};
        width: 400px;
        height: 53px;
        border-radius: 5px;
        border: none;
        color: ${theme.colors.white};
        font-size: ${theme.fonts.P0};
        font-weight: 700;
        font-family: 'Arial';
        display: flex;
        justify-content: center;
        align-items: center;

        :hover {
        background-color: ${theme.colors.white};
        border: 1px solid ${theme.colors.primary_burger};
        color: ${theme.colors.primary_burger};
        cursor: pointer;
        }
        :active {
        background-color: ${theme.colors.primary_burger};
        border: 1px solid ${theme.colors.white};
        color: ${theme.colors.white};
        cursor: pointer;
        }
    .arrow {
        margin-left: 10px;
    }
`;