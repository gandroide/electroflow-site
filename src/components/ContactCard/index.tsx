import react from 'react';
import {
  StyledContactCardContainer,
  StyledContactCardContent,
  StyledContactCardHeader,
  StyledContactCardHeaderSeparator,
  StyledContactCardInfoContainer,
  StyledContactCardInfoContent,
  StyledContactCardInfoLabel,
  StyledContactCardInfoValue,
  StyledContactCardLeftBorder,
  StyledContactCardName,
  StyledContactCardPosition,
  StyledContactCardTopTrapezoid,
} from './styled';
import {
  StyledContactCardImg,
  StyledContactCardImgContainer,
  StyledContactCardRightTrapezoidBig,
  StyledContactCardRightTrapezoidSmall,
} from '../../styles';

const ContactCard = () => {
  return (
    <StyledContactCardContainer>
      <StyledContactCardContent>
        <StyledContactCardHeader>
          <StyledContactCardTopTrapezoid />
          <StyledContactCardName>Gervásio Fernandes</StyledContactCardName>
          <StyledContactCardHeaderSeparator />
          <StyledContactCardPosition>
            Automação e Manutenção Industrial
          </StyledContactCardPosition>
        </StyledContactCardHeader>
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
      <StyledContactCardImgContainer>
        <StyledContactCardImg />
      </StyledContactCardImgContainer>
      <StyledContactCardRightTrapezoidSmall />
      <StyledContactCardRightTrapezoidBig />
    </StyledContactCardContainer>
  );
};

export default ContactCard;
