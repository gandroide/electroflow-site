import react, { FC } from 'react';

import RequiredInput from '../RequiredInput';

import { TextareaInputProps } from '../../../interfaces';
import {
  StyledInputContainer,
  StyledInputContent,
  StyledInputLabel,
  StyledTextareaInput,
} from '../styled';

const TextareaInput: FC<TextareaInputProps> = ({
  id,
  label,
  value,
  hasError,
  isRequired,
  errorMsg,
  changeHandler,
}) => {
  return (
    <StyledInputContainer $hasError={hasError}>
      <StyledInputLabel htmlFor={id}>
        {label}
        {isRequired && <RequiredInput />}
      </StyledInputLabel>
      <StyledInputContent>
        <StyledTextareaInput
          onChange={changeHandler}
          value={value}
        ></StyledTextareaInput>
      </StyledInputContent>
    </StyledInputContainer>
  );
};

export default TextareaInput;
