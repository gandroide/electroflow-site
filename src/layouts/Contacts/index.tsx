import react from 'react';
import { GridItem, Grid } from '../../components/Grid';
import { StyledContactsContainer } from './styled';
import ContactCard from '../../components/ContactCard';
import { ContactCardData } from '../../interfaces';

import FlavioPhoto from '../../assets/imgs/contacts/flavio.jpg';
import MarianaPhoto from '../../assets/imgs/contacts/mariana.jpg';
import GervasioPhoto from '../../assets/imgs/contacts/gervasio.jpg';
import RubenPhoto from '../../assets/imgs/contacts/ruben.jpg';
import PedroPhoto from '../../assets/imgs/contacts/pedro.jpg';
import HelderPhoto from '../../assets/imgs/contacts/helder.jpg';
import EmanuelPhoto from '../../assets/imgs/contacts/emanuel.jpg';
import PedroSilvaPhoto from '../../assets/imgs/contacts/pedro-silva.jpg';
import HugoPhoto from '../../assets/imgs/contacts/hugo.jpg';
import AndrePhoto from '../../assets/imgs/contacts/andre.jpeg';

const contacts: ContactCardData[] = [
  {
    id: 1,
    name: 'Flávio Figueira',
    position: 'Diretor Executivo (CEO)',
    email: 'flavio.figueira@electroflow.pt',
    phone: '910952097',
    photo: FlavioPhoto,
  },
  {
    id: 2,
    name: 'Mariana Alves',
    position: 'Serviços Administrativos e Financeiros',
    email: 'admistrativo@electroflow.pt',
    phone: '291143138',
    photo: MarianaPhoto,
  },
  {
    id: 3,
    name: 'Gervásio Fernandes',
    position: 'Diretor Técnico (CTO)',
    email: 'gervasio.fernandes@electroflow.pt',
    phone: '963048614',
    photo: GervasioPhoto,
  },
  {
    id: 4,
    name: 'Ruben Ramos',
    position: 'Automação e Manutenção Industrial',
    email: 'ruben.ramos@electroflow.pt',
    phone: '962387450',
    photo: RubenPhoto,
  },
  {
    id: 5,
    name: 'Pedro Correia',
    position: 'Instalações Elétricas e Energias Renováveis',
    email: 'pedro.correia@electroflow.pt',
    phone: '966301130',
    photo: PedroPhoto,
  },
  {
    id: 6,
    name: 'Helder Gois',
    position: 'Instalações Elétricas e Energias Renováveis',
    email: 'helder.gois@electroflow.pt',
    phone: '968848836',
    photo: HelderPhoto,
  },
  {
    id: 7,
    name: 'Emanuel Freitas',
    position: 'Climatização',
    email: 'avac@electroflow.pt',
    phone: '966300725',
    photo: EmanuelPhoto,
  },
  {
    id: 8,
    name: 'Pedro Silva',
    position: 'Climatização',
    email: 'pedro.silva@electroflow.pt',
    phone: '966332403',
    photo: PedroSilvaPhoto,
  },
  {
    id: 9,
    name: 'Hugo Jardim',
    position: 'Compras e Logística',
    email: 'producao@electroflow.pt',
    phone: '967181479',
    photo: HugoPhoto,
  },
  {
    id: 10,
    name: 'André Abreu',
    position: 'Compras e Logística',
    email: 'compras@electroflow.pt',
    phone: '291143139',
    photo: AndrePhoto,
  },
];

const Contacts = () => {
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
