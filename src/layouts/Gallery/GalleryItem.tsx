import react, { FC } from 'react';
import { GalleryItemProps } from '../../interfaces';
import {
  StyledGalleryItemContainer,
  StyledGalleryItemDescription,
  StyledGalleryItemImage,
} from './styled';

const GalleryItemWork: FC<GalleryItemProps> = ({ description, img }) => {
  return (
    <StyledGalleryItemContainer>
      <StyledGalleryItemImage src={img} />
      <StyledGalleryItemDescription>{description}</StyledGalleryItemDescription>
    </StyledGalleryItemContainer>
  );
};

export default GalleryItemWork;
