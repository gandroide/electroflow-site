import react, { useReducer, ChangeEvent, Dispatch } from 'react';
import { InputProps } from '../interfaces';

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
            stateCopy[payload.index].value = payload.event.target.value;
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