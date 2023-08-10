import { styled } from "styled-components";
import { theme } from "../../theme/design";

export default function SubmitButton(props) {            
    return (
        <SubmitButtonStyled className={props.className}>
            <span>{props.label}</span>
            {props.IconButton && props.IconButton}
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
        font-weight: ${theme.weights.bold};
        font-family: 'Arial';
        display: flex;
        justify-content: center;
        align-items: center;

        &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
        &:hover:not(:disabled) {
        background-color: ${theme.colors.white};
        border: 1px solid ${theme.colors.primary_burger};
        color: ${theme.colors.primary_burger};
        transition: all 200ms ease-out;
        cursor: pointer;
        }
        &:active {
        background-color: ${theme.colors.primary_burger};
        border: 1px solid ${theme.colors.white};
        color: ${theme.colors.white};
        cursor: pointer;
        }
    
`;