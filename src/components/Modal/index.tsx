import react, { FC } from 'react';
import {
  StyledModal,
  StyledModalBackdrop,
  StyledModalContainer,
  StyledModalContent,
  StyledModalHeader,
  StyledModalTitle,
} from './styled';
import { ModalProps } from '../../interfaces';

const Modal: FC<ModalProps> = ({ title, children, isOpen, closeCallback }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <StyledModal>
      <StyledModalBackdrop onClick={closeCallback} />
      <StyledModalContainer>
        <StyledModalHeader>
          <StyledModalTitle>{title}</StyledModalTitle>
          <button onClick={() => closeCallback()}>Fechar</button>
        </StyledModalHeader>
        <StyledModalContent>{children}</StyledModalContent>
      </StyledModalContainer>
    </StyledModal>
  );
};

export default Modal;
