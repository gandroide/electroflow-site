import react, { FC } from 'react';
import useFormInputs, { ActionTypes } from '../../hooks/useFormInputs';
import { TextInput, TextareaInput } from '../Inputs';
import { FormProps, isTextInput, isTextareaInput } from '../../interfaces';
import { Grid, GridItem } from '../Grid';

import {
  StyledForm,
  StyledFormButton,
  StyledFormButtosContainer,
} from './styled';
import { useTranslation } from 'react-i18next';

const Form: FC<FormProps> = ({ inputs, submitCallback }) => {
  const { t } = useTranslation();
  const { formInputs, formActions } = useFormInputs(inputs);

  t('translations.header.mission.title');

  const generatedInputs = () => {
    return formInputs.map((input, index) => {
      const { id, label, hasError, errorMsg, isRequired, columns } = input;

      if (isTextInput(input)) {
        return (
          <GridItem columns={columns} key={id}>
            <TextInput
              id={id}
              label={t(`translations.form.${id}`)}
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
