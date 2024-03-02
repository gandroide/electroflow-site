import { ChangeEvent, HTMLInputTypeAttribute, ReactNode } from 'react';

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

export type BasicInput = SharedInputProperties & {
  type: HTMLInputTypeAttribute;
};

export type TextareaInput = SharedInputProperties & {
  type: 'textarea';
};

export type RadioInput = SharedInputProperties & {
  type: 'radio';
};

// Component Props
export type InputProps = BasicInput | TextareaInput | RadioInput;

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
};

export type GridItemProps = {
  children: GridProps['children'];
  columns?: {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
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
