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

const Modal: FC<ModalProps> = ({ title, children }) => {
  return (
    <StyledModal>
      <StyledModalBackdrop />
      <StyledModalContainer>
        <StyledModalHeader>
          <StyledModalTitle>{title}</StyledModalTitle>
          <button>Fechar</button>
        </StyledModalHeader>
        <StyledModalContent>{children}</StyledModalContent>
      </StyledModalContainer>
    </StyledModal>
  );
};

export default Modal;
