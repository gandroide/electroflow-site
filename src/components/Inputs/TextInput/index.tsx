import react, { FC } from 'react';

import RequiredInput from '../RequiredInput';

import { BasicInputProps } from '../../../interfaces';
import {
  StyledInputContainer,
  StyledInputContent,
  StyledInputLabel,
  StyledInputText,
} from '../styled';

const TextInput: FC<BasicInputProps> = ({
  id,
  label,
  type,
  value,
  hasError,
  isRequired,
  changeHandler,
}) => {
  return (
    <StyledInputContainer $hasError={hasError}>
      <StyledInputLabel htmlFor={id}>
        {label}
        {isRequired && <RequiredInput />}
      </StyledInputLabel>
      <StyledInputContent>
        <StyledInputText
          id={id}
          value={value}
          type={type}
          onChange={changeHandler}
        />
      </StyledInputContent>
    </StyledInputContainer>
  );
};

export default TextInput;
