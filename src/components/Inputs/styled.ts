import styled from "styled-components";
import { SharedInputProperties } from "../../interfaces";

type StyledInputErrorProps = {
    $hasError: SharedInputProperties['hasError'];
}

export const StyledInputContainer = styled.div<StyledInputErrorProps>`
    ${({$hasError}) => {
        if ($hasError) {
            return `
                & ${StyledInputContent} {
                    border: 1px solid red;
                }
            `
        }

        return {};
    }}
`;

export const StyledInputLabel = styled.label``;

export const StyledInputContent = styled.div`
    display: flex;
    border: 1px solid #cbcbcb;
`;

export const StyledInputText = styled.input`
    width: 100%;
    padding: 3px 10px;
`;

export const StyledTextareaInput = styled.textarea`
    resize: none;
    width: 100%;
    padding: 3px 10px;
`;

export const StyledRequiredInputContainer = styled.span`
    color: red;
`
