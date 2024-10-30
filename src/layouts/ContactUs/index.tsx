import react, { useState } from 'react';
import {
  StyledQuaternaryTitle,
  StyledSecondaryTitle,
  StyledTertiaryTtile,
} from '../../styles';
import {
  StyledContactUsContainer,
  StyledContactUsContent,
  StyledContactUsInformationContainer,
  StyledContactUsInformationContent,
  StyledContactUsInformationIcon,
  StyledContactUsInformationValue,
  StyledContactUsOverlay,
  StyledContactUsSection,
  StyledFormContainer,
  StyledTertiaryTitleContainer,
} from './styled';
import Map from '../../assets/imgs/map.png';
import Form from '../../components/Form';
import { FormProps, InputProps } from '../../interfaces';
import { TfiEmail, TfiLocationPin, TfiMobile } from 'react-icons/tfi';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { ConfirmationModal } from '../../components/confirmationModal/ConfirmationModal';

const ContactUs = () => {
  const { t } = useTranslation();

  const [isConfirmationVisible, setIsConfirmationVisible] = useState(false);

  const handleShowConfirmation = () => {
    setIsConfirmationVisible(true);
    setTimeout(() => setIsConfirmationVisible(false), 2000); // Ocultar después de 2 segundos
  };

  const formInputs: InputProps[] = [
    {
      id: 'name',
      label: t('translations.header.contact.contactForm.name'),
      value: '',
      hasError: false,
      errorMsg: '',
      isRequired: true,
      type: 'text',
      columns: {
        sm: 6,
        md: 12,
        lg: 6,
      },
    },
    {
      id: 'email',
      label: 'Email',
      value: '',
      hasError: false,
      errorMsg: '',
      isRequired: true,
      type: 'text',
      columns: {
        sm: 6,
        md: 12,
        lg: 6,
      },
    },
    {
      id: 'subject',
      type: 'text',
      value: '',
      hasError: false,
      isRequired: true,
      label: t('translations.header.contact.contactForm.subject'),
      errorMsg: '',
    },
    {
      id: 'details',
      label: t('translations.header.contact.contactForm.message'),
      value: '',
      hasError: false,
      errorMsg: '',
      isRequired: true,
      type: 'textarea',
    },
  ];
  // const formRef = useRef();
  // const [name, setName] = useState<string>();
  // const [email, setEmail] = useState<string>();
  // const [message, setMessage] = useState<string>();

  // const onSubmitCallback: FormProps['submitCallback'] = async (inputs) => {
  const serviceId = 'service_yaj63pi';
  const templateId = 'template_i6j2fkx';
  const publicKey = 'MwjIzGM8lMjpEKNPb';

  const onSubmitCallback: FormProps['submitCallback'] = (inputs) => {
    handleShowConfirmation();
    const emailObj: {
      [key: string]: string;
    } = {};

    inputs.forEach((input) => {
      emailObj[input.id] = input.value;
    });

    axios
      .post('https://api.emailjs.com/api/v1.0/email/send', {
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: emailObj,
      })
      .then((response: any) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // const handleSubmit = async (e: any) => {
  //   e.preventDefault();
  // const data = {
  //   serviceId: serviceId,
  //   templateId: templateId,
  //   publicKey: publicKey,
  //   templateParams: {
  //     formName: name,
  //     formEmail: email,
  //     formMessage: message,
  //   },
  // };
  // try {
  //   const res = await axios.post(
  //     "'https://api.emailjs.com/api/v1.0/email/send",
  //     data,{
  //     contentType: 'application/json'}
  //   );
  //   console.log(res.data, 'data');
  //   setName('');
  //   setEmail('');
  //   setMessage('');
  // } catch (error) {
  //   console.error(error);
  // debugger;
  // emailjs.sendForm(serviceId, templateId, e.target, publicKey).then(
  //   (result) => {
  //     console.log('Correo enviado correctamente:', result.text);
  //   },
  //   (error) => {
  //     console.log('Error al enviar el correo:', error.text);
  //   },
  // );

  //   axios
  //     .post('https://api.emailjs.com/api/v1.0/email/send', {
  //       service_id: serviceId,
  //       template_id: templateId,
  //       user_id: publicKey,
  //       template_params: {
  //         teste: 'filipe',
  //       },
  //     })
  //     .then((response: any) => {
  //       console.log(response, 'entro?');
  //     })
  //     .catch((e) => {
  //       console.log(e, 'error?');
  //     });
  // };
  return (
    <StyledContactUsSection id="contact">
      <StyledContactUsOverlay $background={Map} />
      <StyledContactUsContainer>
        <StyledSecondaryTitle>
          {t('translations.header.contact.contactForm.title')}
        </StyledSecondaryTitle>
        <StyledTertiaryTitleContainer>
          <StyledTertiaryTtile>
            {t('translations.header.contact.contactForm.moreInfo')}
          </StyledTertiaryTtile>
        </StyledTertiaryTitleContainer>
      </StyledContactUsContainer>
      <StyledContactUsContent>
        <StyledFormContainer>
          <StyledQuaternaryTitle>
            {t('translations.header.contact.contactForm.writeUs')}
          </StyledQuaternaryTitle>
          <Form inputs={formInputs} submitCallback={onSubmitCallback} />
        </StyledFormContainer>
        <StyledContactUsInformationContainer>
          <StyledQuaternaryTitle>
            {t('translations.header.contact.contactForm.contactInfo')}
          </StyledQuaternaryTitle>
          <StyledContactUsInformationContent>
            <StyledContactUsInformationIcon>
              <TfiLocationPin size={20} />
            </StyledContactUsInformationIcon>
            <StyledContactUsInformationValue>
              Caminho do Pilar 18 RC, 9000-136 Funchal
            </StyledContactUsInformationValue>
          </StyledContactUsInformationContent>
          <StyledContactUsInformationContent>
            <StyledContactUsInformationIcon>
              <TfiMobile size={20} />
            </StyledContactUsInformationIcon>
            <StyledContactUsInformationValue>
              (+351) 291 143 138
            </StyledContactUsInformationValue>
          </StyledContactUsInformationContent>
          <StyledContactUsInformationContent>
            <StyledContactUsInformationIcon>
              <TfiEmail size={20} />
            </StyledContactUsInformationIcon>
            <StyledContactUsInformationValue>
              info@electroflow.pt
            </StyledContactUsInformationValue>
          </StyledContactUsInformationContent>
          {/* <div
            className="g-recaptcha"
            data-sitekey="6LfVkV4qAAAAAKJbJGzGEV-CXryy5mZa7NJIbc0s"
          ></div> */}
          <br />
          <ConfirmationModal isConfirmationVisible={isConfirmationVisible} />
        </StyledContactUsInformationContainer>
      </StyledContactUsContent>
    </StyledContactUsSection>
  );
};

export default ContactUs;
