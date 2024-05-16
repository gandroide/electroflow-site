import react, { FC } from 'react';
import useFormInputs, { ActionTypes } from '../../hooks/useFormInputs';
import { TextInput, TextareaInput } from '../Inputs';
import {
  FormProps,
  isTextInput,
  isTextareaInput,
  isRadioInput,
} from '../../interfaces';
import { Grid, GridItem } from '../Grid';
import RadioInput from '../Inputs/RadioInput';

import {
  StyledForm,
  StyledFormButton,
  StyledFormButtosContainer,
} from './styled';

const Form: FC<FormProps> = ({ inputs, submitCallback }) => {
  const { formInputs, formActions } = useFormInputs(inputs);
  const formData = {};

  const generatedInputs = () => {
    return formInputs.map((input, index) => {
      const { id, label, hasError, errorMsg, isRequired, columns } = input;

      if (isTextInput(input)) {
        return (
          <GridItem columns={columns} key={id}>
            <TextInput
              id={id}
              label={label}
              type={input.type}
              value={input.value}
              hasError={hasError}
              errorMsg={errorMsg}
              isRequired={isRequired}
              changeHandler={(e) =>
                formActions({
                  type: ActionTypes.CHANGE,
                  payload: { event: e, index },
                })
              }
            />
          </GridItem>
        );
      }

      if (isTextareaInput(input)) {
        return (
          <GridItem columns={columns} key={id}>
            <TextareaInput
              id={id}
              label={label}
              value={input.value}
              hasError={hasError}
              errorMsg={errorMsg}
              isRequired={isRequired}
              changeHandler={(e) =>
                formActions({
                  type: ActionTypes.CHANGE,
                  payload: { event: e, index },
                })
              }
            />
          </GridItem>
        );
      }

      if (isRadioInput(input)) {
        return (
          <GridItem columns={columns} key={id}>
            <RadioInput
              id={id}
              label={label}
              hasError={hasError}
              errorMsg={errorMsg}
              isRequired={isRequired}
              changeHandler={(e) =>
                formActions({
                  type: ActionTypes.CHANGE,
                  payload: { event: e, index },
                })
              }
              options={input.options}
            />
          </GridItem>
        );
      }
    });
  };

  return (
    <StyledForm>
      <Grid gap={20}>{generatedInputs()}</Grid>
      <StyledFormButtosContainer>
        <StyledFormButton
          type="button"
          onClick={() => submitCallback(formInputs)}
        >
          Send
        </StyledFormButton>
      </StyledFormButtosContainer>
    </StyledForm>
  );
};

export default Form;
