import react, { useCallback, useState } from 'react';
import Modal from '../Modal';
import PrivacyPolicy from '../../layouts/PrivacyPolicy';
import { useTranslation } from 'react-i18next';
import {
  StyledFooter,
  StyledLinkButton,
  StyledFooterContent,
  StyledFooterRights,
} from './styled';
import { ScrollTop } from '../scroll/ScrollTop';

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
        <StyledFooterRights>
          Electroflow &#169; {new Date().getFullYear()} -{' '}
          {t('translations.footer.copy')} {t('translations.footer.reserved')} |{' '}
        </StyledFooterRights>
        <StyledLinkButton title="Privacy Policy" onClick={handleOpen}>
          {t('translations.footer.privacyPolicyTitle')}
        </StyledLinkButton>
      </StyledFooterContent>
      <Modal closeCallback={handleCloseCallback} isOpen={open}>
        <PrivacyPolicy />
      </Modal>
      <ScrollTop />
    </StyledFooter>
  );
};

export default Footer;
