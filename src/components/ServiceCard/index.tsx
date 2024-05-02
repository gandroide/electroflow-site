import react, { FC, useRef } from 'react';
import { PiSealCheckBold } from 'react-icons/pi';
import {
  StyledServiceItem,
  StyledServiceImgContainer,
  StyledServiceImg,
  StyledServiceContent,
  StyledServiceTitle,
  StyledServiceList,
  StyledServiceListItem,
  StyledServiceListDescription,
} from './styled';
import { ServiceCardProps } from '../../interfaces';
import { CSSTransition } from 'react-transition-group';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const ServiceCard: FC<ServiceCardProps> = ({ img, title, items }) => {
  const serviceItemRef = useRef(null);
  const isServiceVisible = useIntersectionObserver({ ref: serviceItemRef });

  return (
    <CSSTransition
      timeout={500}
      classNames="service-card"
      in={isServiceVisible}
    >
      <StyledServiceItem ref={serviceItemRef}>
        <StyledServiceImgContainer>
          <StyledServiceImg src={img} />
        </StyledServiceImgContainer>
        <StyledServiceContent>
          <StyledServiceTitle>{title}</StyledServiceTitle>
          <StyledServiceList>
            {items.map((item) => (
              <StyledServiceListItem key={item.id}>
                <PiSealCheckBold />
                <StyledServiceListDescription>
                  {item.text}
                </StyledServiceListDescription>
              </StyledServiceListItem>
            ))}
          </StyledServiceList>
        </StyledServiceContent>
      </StyledServiceItem>
    </CSSTransition>
  );
};

export default ServiceCard;
