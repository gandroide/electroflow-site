import react, { useReducer, ChangeEvent, Dispatch } from 'react';
import { InputProps, isTextInput, isTextareaInput } from '../interfaces';

type UseFormInputs = (inputs: InputProps[]) => { formInputs: UseFormInputsState, formActions: Dispatch<UseFormInputsActions> };

type UseFormInputsState = InputProps[];

export enum ActionTypes {
    CHANGE,
}

type ChangeAction = {
    type: ActionTypes.CHANGE;
    payload: {
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        index: number;
    };
}

type UseFormInputsActions = ChangeAction;

const reducer = (state: UseFormInputsState, { type, payload }: UseFormInputsActions) => {
    switch (type) {
        case ActionTypes.CHANGE:
            const stateCopy = [...state];
            const currentInput = stateCopy[payload.index];

            if (isTextInput(currentInput) || isTextareaInput(currentInput)) {
                currentInput.value = payload.event.target.value;
            }

            // if (isRadioInput(currentInput)) {
            //     const optionIndex = currentInput.options.findIndex((option) => option.value === payload.event.target.value);
            //     currentInput.options = currentInput.options.map((option, index) => ({...option, isChecked: optionIndex === index}));
            // }

            return stateCopy;
        default:
            return state;
    }
}

const useFormInputs: UseFormInputs = (inputs) => {
    const [formInputs, formActions] = useReducer(reducer, [...inputs]);

    return {
        formInputs,
        formActions
    };
}

export default useFormInputs;