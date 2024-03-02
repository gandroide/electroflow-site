import react from 'react';
import { GridItem, Grid } from '../../components/Grid';
import { StyledContactsContainer } from './styled';
import ContactCard from '../../components/ContactCard';

const Contacts = () => {
  return (
    <StyledContactsContainer>
      <Grid>
        <GridItem columns={{ md: 6, lg: 6 }}>
          <ContactCard />
        </GridItem>
        <GridItem columns={{ md: 6, lg: 6 }}>
          <ContactCard />
        </GridItem>
        <GridItem columns={{ md: 6, lg: 6 }}>
          <ContactCard />
        </GridItem>
        <GridItem columns={{ md: 6, lg: 6 }}>
          <ContactCard />
        </GridItem>
        <GridItem columns={{ md: 6, lg: 6 }}>
          <ContactCard />
        </GridItem>
        <GridItem columns={{ md: 6, lg: 6 }}>
          <ContactCard />
        </GridItem>
      </Grid>
    </StyledContactsContainer>
  );
};

export default Contacts;
