import react, { FC } from 'react';
import { RiCloseFill } from 'react-icons/ri';

import {
  StyledModal,
  StyledModalBackdrop,
  StyledModalContainer,
  StyledModalContent,
  StyledModalHeader,
  StyledModalCloseButton,
} from './styled';

import { ModalProps } from '../../interfaces';
import { createPortal } from 'react-dom';

const Modal: FC<ModalProps> = ({ children, isOpen, closeCallback }) => {
  if (!isOpen) {
    return null;
  }

  return createPortal(
    <StyledModal>
      <StyledModalBackdrop onClick={closeCallback} />
      <StyledModalContainer>
        <StyledModalHeader>
          <StyledModalCloseButton onClick={() => closeCallback()}>
            <RiCloseFill />
          </StyledModalCloseButton>
        </StyledModalHeader>
        <StyledModalContent>{children}</StyledModalContent>
      </StyledModalContainer>
    </StyledModal>,
    document.body,
  );
};

export default Modal;
