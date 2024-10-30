import react, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  animation: ${fadeIn} 0.3s ease-in-out;
  z-index: 1000;
`;

const ConfirmationContainer = styled.div`
  background-color: #e6ffe6;
  border: 1px solid #00cc66;
  border-radius: 8px;
  padding: 30px;
  font-size: 1.2rem;
  text-align: center;
  animation: ${fadeIn} 0.3s ease-in-out;
`;

const ConfirmationMessage = styled.p`
  margin: 20;
  color: black;
`;

const FormConfirmation: FC = () => {
  const { t } = useTranslation();
  return (
    <ModalOverlay>
      <ConfirmationContainer>
        <ConfirmationMessage>
          {t('translations.header.contact.contactForm.confirmationModal')}
        </ConfirmationMessage>
      </ConfirmationContainer>
    </ModalOverlay>
  );
};

interface ConfirmationModalProps {
  isConfirmationVisible: boolean;
  onClose?: () => void;
}

export const ConfirmationModal: FC<ConfirmationModalProps> = ({
  isConfirmationVisible,
}) => {
  return <div>{isConfirmationVisible ? <FormConfirmation /> : null}</div>;
};
