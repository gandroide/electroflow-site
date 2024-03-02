import react, { FC } from 'react';

import RequiredInput from '../RequiredInput';
import { RadioInputProps } from '../../../interfaces';
import {
  StyledInputContainer,
  StyledRadioInput,
  StyledRadioInputContent,
  StyledRadioInputDescription,
  StyledRadioInputLabel,
} from '../styled';

const RadioInput: FC<RadioInputProps> = ({
  changeHandler,
  errorMsg,
  hasError,
  id,
  isRequired,
  label,
  options,
  columns,
}) => {
  return (
    <StyledInputContainer $hasError={hasError}>
      <StyledRadioInputDescription>{label}</StyledRadioInputDescription>
      <StyledRadioInputContent>
        {options.map(({ isChecked, label, value }) => (
          <StyledRadioInputLabel key={value}>
            <StyledRadioInput
              type="radio"
              name={id}
              checked={isChecked}
              onChange={changeHandler}
              value={value}
            />
            {label}
          </StyledRadioInputLabel>
        ))}
      </StyledRadioInputContent>
    </StyledInputContainer>
  );
};

export default RadioInput;
