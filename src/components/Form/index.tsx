import react, { FC } from 'react';
import useFormInputs, { ActionTypes } from '../../hooks/useFormInputs';
import { TextInput, TextareaInput } from '../Inputs';
import { FormProps, isTextInput, isTextareaInput } from '../../interfaces';

const Form: FC<FormProps> = ({ inputs }) => {
  const { formInputs, formActions } = useFormInputs(inputs);

  const generatedInputs = () => {
    return formInputs.map((input, index) => {
      const { id, label, type, value, hasError, errorMsg, isRequired } = input;

      if (isTextInput(input)) {
        return (
          <TextInput
            key={id}
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
        );
      }

      if (isTextareaInput(input)) {
        return (
          <TextareaInput
            key={id}
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
        );
      }
    });
  };

  return <form>{generatedInputs()}</form>;
};

export default Form;
