import react, { FC, HTMLInputTypeAttribute } from 'react';
import useFormInputs, { ActionTypes } from '../../hooks/useFormInputs';

type SharedInputProps = {
    id: string;
    label: string;
    value: string;
}

type BasicInputProps = SharedInputProps & {
    type: HTMLInputTypeAttribute;
}

type TextareaInputProps = SharedInputProps & {
    type: 'textarea';
}

type InputProps = BasicInputProps | TextareaInputProps;

type FormProps = {
    inputs: InputProps[];
}

const Form: FC<FormProps> = ({ inputs }) => {
    const { formInputs, formActions } = useFormInputs(inputs);

    const generatedInputs = () => {
        return formInputs.map(({ id, label, type, value }, index) => {
            if (type === 'text') {
                return (
                    <div key={id}>
                        <label htmlFor={id}>{label}</label>
                        <div>
                            <input
                                value={value}
                                type={type}
                                onChange={(e) => formActions({ type: ActionTypes.CHANGE, payload: { event: e, index } })} 
                            />
                        </div>
                    </div>
                )
            }

            if (type === 'textarea') {
                return (
                    <div key={id}>
                        <label htmlFor={id}>{label}</label>
                        <div>
                            <textarea
                                onChange={(e) => formActions({ type: ActionTypes.CHANGE, payload: { event: e, index } })}
                                value={value}
                            ></textarea>
                        </div>
                    </div>
                )
            }
        });
    }

    return (
        <form>
            {generatedInputs()}
        </form>
    )
}

export default Form;