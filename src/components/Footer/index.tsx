import react, { useCallback, useState } from 'react';
import Modal from '../Modal';
import PrivacyPolicy from '../../layouts/PrivacyPolicy';
import { useTranslation } from 'react-i18next';
import { ElectroFooter, PrivacyButton, PrivacyPolicyContainer } from './styled';

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
    <ElectroFooter>
      <PrivacyPolicyContainer>
        <p>
          Electroflow &#169; {new Date().getFullYear()} - Todos os direitos
          reservados
        </p>

        <PrivacyButton title="Privacy Policy" onClick={handleOpen}>
          {t('translations.footer.privacyPolicyTitle')}
        </PrivacyButton>
      </PrivacyPolicyContainer>
      <Modal
        closeCallback={handleCloseCallback}
        isOpen={open}
        title="Política de privacidade da Electroflow"
      >
        <PrivacyPolicy />
      </Modal>
    </ElectroFooter>
  );
};

export default Footer;
