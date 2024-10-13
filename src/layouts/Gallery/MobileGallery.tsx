import react, { FC, useMemo, useState } from 'react';
import { MobileGalleryProps } from '../../interfaces';
import { StyledMobileGallery } from './styled';
import GalleryItemWork from './GalleryItem';

const GALLERY_ITEM_STEP = 3;

const MobileGallery: FC<MobileGalleryProps> = ({ items }) => {
  const [currentStep, setCurrentStep] = useState(GALLERY_ITEM_STEP);

  const onShowMoreHandler = () => {
    let nextStepCounter = currentStep + GALLERY_ITEM_STEP;

    if (nextStepCounter > items.length) {
      nextStepCounter = items.length;
    }

    console.log(nextStepCounter, items.length);

    if (currentStep === nextStepCounter) return;

    console.log('updating state');

    setCurrentStep(nextStepCounter);
  };

  const renderItems = useMemo(() => {
    return items.slice(0, currentStep);
  }, [currentStep, items]);

  return (
    <StyledMobileGallery>
      {renderItems.map(({ description, img }) => (
        <GalleryItemWork
          key={description}
          description={description}
          img={img}
        />
      ))}
      <button onClick={onShowMoreHandler}>Show more</button>
    </StyledMobileGallery>
  );
};

export default MobileGallery;
