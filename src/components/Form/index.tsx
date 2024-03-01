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

const Form: FC<FormProps> = ({ inputs }) => {
  const { formInputs, formActions } = useFormInputs(inputs);

  const generatedInputs = () => {
    return formInputs.map((input, index) => {
      const {
        id,
        label,
        type,
        value,
        hasError,
        errorMsg,
        isRequired,
        columns,
      } = input;

      if (isTextInput(input)) {
        return (
          <GridItem columns={columns} key={id}>
            <TextInput
              id={id}
              label={label}
              type={type}
              value={value}
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
              value={value}
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
            {/* <RadioInput /> */}d
          </GridItem>
        );
      }
    });
  };

  return (
    <form style={{ width: '100%' }}>
      <Grid>{generatedInputs()}</Grid>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          marginTop: '48px',
        }}
      >
        <button
          style={{
            border: '1px solid blue',
            padding: '8px 48px',
            borderRadius: '4px',
            background: 'blue',
            color: '#fff',
          }}
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default Form;
