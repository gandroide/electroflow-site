import react, { useState } from 'react';
import { GridItem, Grid } from '../../components/Grid';
import { StyledContactsContainer } from './styled';
import ContactCard from '../../components/ContactCard';
import { ContactCardData } from '../../interfaces';

import FlavioPhoto from '../../assets/imgs/contacts/flavio.png';
import MarianaPhoto from '../../assets/imgs/contacts/mariana.png';
import GervasioPhoto from '../../assets/imgs/contacts/gervasio.png';
import RubenPhoto from '../../assets/imgs/contacts/ruben.png';
import PedroPhoto from '../../assets/imgs/contacts/pedro.png';
import HelderPhoto from '../../assets/imgs/contacts/helder.png';
import EmanuelPhoto from '../../assets/imgs/contacts/emanuel.png';
import PedroSilvaPhoto from '../../assets/imgs/contacts/pedro-silva.png';
import HugoPhoto from '../../assets/imgs/contacts/hugo.png';
import AndrePhoto from '../../assets/imgs/contacts/andre.png';
import { useTranslation } from 'react-i18next';

const Contacts = () => {
  const { t } = useTranslation();
  const contacts: ContactCardData[] = [
    {
      id: 1,
      name: 'Flávio Figueira',
      position: t('translations.header.team.position.ceo'),
      email: 'flavio.figueira@electroflow.pt',
      phone: '910952097',
      photo: FlavioPhoto,
    },
    {
      id: 2,
      name: 'Marina Alves',
      position: t('translations.header.team.position.admin'),
      email: 'administrativo@electroflow.pt',
      phone: '291143138',
      photo: MarianaPhoto,
    },
    {
      id: 3,
      name: 'Gervásio Fernandes',
      position: t('translations.header.team.position.cto'),
      email: 'gervasio.fernandes@electroflow.pt',
      phone: '963048614',
      photo: GervasioPhoto,
    },
    {
      id: 4,
      name: 'Ruben Ramos',
      position: t('translations.header.team.position.clima2'),
      email: 'ruben.ramos@electroflow.pt',
      phone: '962387450',
      photo: RubenPhoto,
    },
    {
      id: 5,
      name: 'Pedro Correia',
      position: t('translations.header.team.position.elect'),
      email: 'pedro.correia@electroflow.pt',
      phone: '966301130',
      photo: PedroPhoto,
    },
    {
      id: 6,
      name: 'Helder Gois',
      position: t('translations.header.team.position.elect'),
      email: 'helder.gois@electroflow.pt',
      phone: '968848836',
      photo: HelderPhoto,
    },
    // {
    //   id: 7,
    //   name: 'Emanuel Freitas',
    //   position: t('translations.header.team.position.clima'),
    //   email: 'avac@electroflow.pt',
    //   phone: '966300725',
    //   photo: EmanuelPhoto,
    // },
    // {
    //   id: 8,
    //   name: 'Pedro Silva',
    //   position: t('translations.header.team.position.clima'),
    //   email: 'pedro.silva@electroflow.pt',
    //   phone: '966332403',
    //   photo: PedroSilvaPhoto,
    // },
    {
      id: 9,
      name: 'Hugo Jardim',
      position: t('translations.header.team.position.compras'),
      email: 'producao@electroflow.pt',
      phone: '291143139',
      photo: HugoPhoto,
    },
    {
      id: 10,
      name: 'André Abreu',
      position: t('translations.header.team.position.compras'),
      email: 'compras@electroflow.pt',
      phone: '291143139',
      photo: AndrePhoto,
    },
  ];

  return (
    <StyledContactsContainer>
      <Grid gap={20}>
        {contacts.map(({ id, name, position, email, phone, photo }) => (
          <GridItem columns={{ md: 6, lg: 6, xxl: 4 }} key={id}>
            <ContactCard
              name={name}
              position={position}
              email={email}
              phone={phone}
              photo={photo}
            />
          </GridItem>
        ))}
      </Grid>
    </StyledContactsContainer>
  );
};

export default Contacts;
