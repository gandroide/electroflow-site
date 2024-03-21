import react from 'react';
import { TfiUser } from 'react-icons/tfi';

import {
  StyledContactCardContainer,
  StyledContactCardContent,
  StyledContactCardHeader,
  StyledContactCardHeaderContainer,
  StyledContactCardHeaderSeparator,
  StyledContactCardImg,
  StyledContactCardImgContainer,
  StyledContactCardInfoContainer,
  StyledContactCardInfoContent,
  StyledContactCardInfoLabel,
  StyledContactCardInfoValue,
  StyledContactCardLeftBorder,
  StyledContactCardName,
  StyledContactCardPosition,
  StyledContactCardRightTrapezoidBig,
  StyledContactCardRightTrapezoidSmall,
  StyledContactCardTopTrapezoid,
} from './styled';

import Mariana from '../../assets/imgs/mariana.jpg';

const ContactCard = () => {
  return (
    <StyledContactCardContainer>
      <StyledContactCardHeaderContainer>
        <StyledContactCardImgContainer>
          <StyledContactCardImg>
            {/* <TfiUser size={80} /> */}
            <img src={Mariana} />
          </StyledContactCardImg>
        </StyledContactCardImgContainer>
        <StyledContactCardHeader>
          <StyledContactCardTopTrapezoid />
          <StyledContactCardName>Gervásio Fernandes</StyledContactCardName>
          <StyledContactCardHeaderSeparator />
          <StyledContactCardPosition>
            Automação e Manutenção Industrial
          </StyledContactCardPosition>
        </StyledContactCardHeader>
      </StyledContactCardHeaderContainer>
      <StyledContactCardContent>
        <StyledContactCardInfoContainer>
          <StyledContactCardInfoContent>
            <StyledContactCardInfoLabel>Telefone</StyledContactCardInfoLabel>
            <StyledContactCardInfoValue>963048614</StyledContactCardInfoValue>
          </StyledContactCardInfoContent>
          <StyledContactCardInfoContent>
            <StyledContactCardInfoLabel>Email</StyledContactCardInfoLabel>
            <StyledContactCardInfoValue>
              gervasio.fernandes@electroflow.pt
            </StyledContactCardInfoValue>
          </StyledContactCardInfoContent>
        </StyledContactCardInfoContainer>
      </StyledContactCardContent>
      <StyledContactCardLeftBorder />
      {/* <StyledContactCardImgContainer>
        <StyledContactCardImg />
      </StyledContactCardImgContainer> */}
      <StyledContactCardRightTrapezoidSmall />
      <StyledContactCardRightTrapezoidBig />
    </StyledContactCardContainer>
  );
};

export default ContactCard;
