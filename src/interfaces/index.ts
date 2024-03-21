import { ChangeEvent, ReactNode } from 'react';

// Types
export type SharedInputProperties = {
  id: string;
  label: string;
  value: string;
  hasError: boolean;
  errorMsg: string;
  isRequired: boolean;
  columns?: GridItemProps['columns'];
};

export type BasicInput = {
  type: 'text';
  id: string;
  label: string;
  value: string;
  hasError: boolean;
  errorMsg: string;
  isRequired: boolean;
  columns?: GridItemProps['columns'];
};

export type TextareaInput = {
  type: 'textarea';
  id: string;
  label: string;
  value: string;
  hasError: boolean;
  errorMsg: string;
  isRequired: boolean;
  columns?: GridItemProps['columns'];
};

export type RadioInputOptions = {
  label: string;
  value: string;
  isChecked: boolean;
}

export type RadioInput = {
  type: 'radio';
  id: string;
  label: string;
  hasError: boolean;
  errorMsg: string;
  isRequired: boolean;
  columns?: GridItemProps['columns'];
  options: RadioInputOptions[];
};

export type Language = {
  id: number;
  code: string;
  name: string;
}

// Component Props
export type InputProps = TextareaInput | BasicInput | RadioInput;

export type FormProps = {
  inputs: InputProps[];
};

export type BasicInputProps = BasicInput & {
  changeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
};

export type TextareaInputProps = Omit<TextareaInput, 'type'> & {
  changeHandler: (e: ChangeEvent<HTMLTextAreaElement>) => void;
};

export type RadioInputProps = Omit<RadioInput, 'type'> & {
  changeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
};

export type GridProps = {
  children: ReactNode;
  gap?: number;
};

export type GridItemProps = {
  children: GridProps['children'];
  columns?: {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    xxl?: number;
  };
};

export type ModalProps = {
  title: string;
  children: ReactNode;
  closeCallback: () => void;
  isOpen: boolean;
};

// Type Guards
export const isTextInput = (input: InputProps): input is BasicInput => {
  return input.type === 'text';
};

export const isTextareaInput = (input: InputProps): input is TextareaInput => {
  return input.type === 'textarea';
};

export const isRadioInput = (input: InputProps): input is RadioInput => {
  return input.type === 'radio';
};
