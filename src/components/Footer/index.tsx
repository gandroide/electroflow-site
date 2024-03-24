import react, { useCallback, useState } from 'react';
import Modal from '../Modal';
import PrivacyPolicy from '../../layouts/PrivacyPolicy';
import { useTranslation } from 'react-i18next';
import { StyledFooter, StyledLinkButton, StyledFooterContent } from './styled';

const Footer = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState<boolean>(false);

  const handleCloseCallback = useCallback(() => {
    setOpen(false);
  }, []);

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);

  return (
    <StyledFooter>
      <StyledFooterContent>
        <span>
          Electroflow &#169; {new Date().getFullYear()} - Todos os direitos
          reservados |{' '}
        </span>
        <StyledLinkButton title="Privacy Policy" onClick={handleOpen}>
          {t('translations.footer.privacyPolicyTitle')}
        </StyledLinkButton>
      </StyledFooterContent>
      <Modal
        closeCallback={handleCloseCallback}
        isOpen={open}
        title="Política de privacidade da Electroflow"
      >
        <PrivacyPolicy />
      </Modal>
    </StyledFooter>
  );
};

export default Footer;
