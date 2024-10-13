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
};

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
};

export type GalleryItem = {
  img: string;
  description: string;
}

// Component Props
export type InputProps = TextareaInput | BasicInput;

export type FormProps = {
  ref?: React.MutableRefObject<HTMLInputElement | null>;
  inputs: InputProps[];
  submitCallback: (inputs: InputProps[]) => void;
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
  children: ReactNode;
  closeCallback: () => void;
  isOpen: boolean;
};

export type ContactCardData = {
  id: number;
  name: string;
  position: string;
  email: string;
  phone: string;
  photo: string;
};

export type ContactCardProps = Omit<ContactCardData, 'id'>;

export type ServiceCardItemData = {
  id: number;
  text: string;
};

export type ServiceCardData = {
  id: number;
  img: string;
  title: string;
  items: ServiceCardItemData[];
};

export type ServiceCardProps = Omit<ServiceCardData, 'id'>;

export type MobileGalleryProps = {
  items: GalleryItem[];
}

export type GalleryItemProps = GalleryItem;

// Type Guards
export const isTextInput = (input: InputProps): input is BasicInput => {
  return input.type === 'text';
};

export const isTextareaInput = (input: InputProps): input is TextareaInput => {
  return input.type === 'textarea';
};

// export const isRadioInput = (input: InputProps): input is RadioInput => {
//   return input.type === 'radio';
// };
