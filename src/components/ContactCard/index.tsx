import react, { FC } from 'react';

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

import { ContactCardProps } from '../../interfaces';
import { useTranslation } from 'react-i18next';

const ContactCard: FC<ContactCardProps> = ({
  name,
  position,
  email,
  phone,
  photo,
}) => {
  const { t } = useTranslation();
  return (
    <StyledContactCardContainer>
      <StyledContactCardHeaderContainer>
        <StyledContactCardImgContainer>
          <StyledContactCardImg>
            <img src={photo} />
          </StyledContactCardImg>
        </StyledContactCardImgContainer>
        <StyledContactCardHeader>
          <StyledContactCardTopTrapezoid />
          <StyledContactCardName>{name}</StyledContactCardName>
          <StyledContactCardHeaderSeparator />
          <StyledContactCardPosition>{position}</StyledContactCardPosition>
        </StyledContactCardHeader>
      </StyledContactCardHeaderContainer>
      <StyledContactCardContent>
        <StyledContactCardInfoContainer>
          <StyledContactCardInfoContent>
            <StyledContactCardInfoLabel>
              {t('translations.cards.phone')}
            </StyledContactCardInfoLabel>
            <StyledContactCardInfoValue>{phone}</StyledContactCardInfoValue>
          </StyledContactCardInfoContent>
          <StyledContactCardInfoContent>
            <StyledContactCardInfoLabel>Email</StyledContactCardInfoLabel>
            <StyledContactCardInfoValue>{email}</StyledContactCardInfoValue>
          </StyledContactCardInfoContent>
        </StyledContactCardInfoContainer>
      </StyledContactCardContent>
      <StyledContactCardLeftBorder />
      <StyledContactCardRightTrapezoidSmall />
      <StyledContactCardRightTrapezoidBig />
    </StyledContactCardContainer>
  );
};

export default ContactCard;
