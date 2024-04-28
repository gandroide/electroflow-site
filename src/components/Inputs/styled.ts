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

export const StyledInputLabel = styled.label`
    color: ${({theme}) => theme.palette.boston};
    font-weight: bold;
`;

export const StyledInputContent = styled.div`
    display: flex;
    border: 1px solid ${({theme}) => theme.palette.thunder};
    border-radius: 4px;
    overflow: hidden;
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
`;

export const StyledRadioInputDescription = styled.p``;

export const StyledRadioInputContent = styled.div``;

export const StyledRadioInputLabel = styled.label`
    display: inline-flex;
    align-items: center;
    cursor: pointer;

    &:not(:last-of-type) {
        margin-right: 40px;
    }
`;

export const StyledRadioInput = styled.input`
    appearance: none;
    position: relative;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    margin-right: 5px;
    cursor: pointer;

    &::after {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 1px solid #cbcbcb;
        border-radius: 50%;
    }

    &:checked::after {
        border: 1px solid red;
    }
`;


