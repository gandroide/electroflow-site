import { ChangeEvent, HTMLInputTypeAttribute } from "react";

// Types
export type SharedInputProperties = {
    id: string;
    label: string;
    value: string;
    hasError: boolean;
    errorMsg: string;
    isRequired: boolean;
}

export type BasicInput = SharedInputProperties & {
    type: HTMLInputTypeAttribute;
}

export type TextareaInput = SharedInputProperties & {
    type: 'textarea';
}

export type InputProps = BasicInput | TextareaInput;

export type FormProps = {
    inputs: InputProps[];
}

export type BasicInputProps = BasicInput & {
    changeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
}

export type TextareaInputProps = Omit<TextareaInput, 'type'> & {
    changeHandler: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

// Type Guards
export const isTextInput = (input: InputProps): input is BasicInput => {
    return input.type === 'text';
}

export const isTextareaInput = (input: InputProps): input is TextareaInput => {
    return input.type === 'textarea';
}