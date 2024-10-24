import react, { useCallback, useEffect, useState } from 'react';

import { StyledGalleryGrid } from './styled';

import Aquaparque from '../../assets/imgs/gallery/aquaparque.webp';
import Imprinews from '../../assets/imgs/gallery/imprinews.webp';
import Meo1 from '../../assets/imgs/gallery/meo-1.webp';
import Meo2 from '../../assets/imgs/gallery/meo-2.webp';
import Abb2 from '../../assets/imgs/gallery/abb2.jpg';
import ThePlace from '../../assets/imgs/gallery/the-place.webp';
import UpacMoradia from '../../assets/imgs/gallery/upac-moradia.webp';
import Judiciaria from '../../assets/imgs/gallery/judiciaria.webp';
import Ferragens from '../../assets/imgs/gallery/ferragens.webp';
import Lourencinha from '../../assets/imgs/gallery/lourencinha.webp';
import AvacAltice from '../../assets/imgs/gallery/avac-altice.webp';
import MobileGallery from './MobileGallery';
import { GalleryItem } from '../../interfaces';
import GalleryItemWork from './GalleryItem';
import { useTranslation } from 'react-i18next';

const GALLERY_MOBILE_WINDOW_WIDTH = 600;

const Gallery = () => {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth < GALLERY_MOBILE_WINDOW_WIDTH,
  );
  const { t } = useTranslation();

  const galleryItems: GalleryItem[] = [
    {
      img: Aquaparque,
      description:
        'Aquaparque - ' + t('translations.header.portfolio.aquaparque'),
    },
    {
      img: Imprinews,
      description:
        'Imprinews - ' + t('translations.header.portfolio.imprinews'),
    },
    {
      img: Meo1,
      description: 'Meo - ' + t('translations.header.portfolio.meo'),
    },
    {
      img: Meo2,
      description:
        'Meo Call Center - ' + t('translations.header.portfolio.meoCallCenter'),
    },
    {
      img: Abb2,
      description:
        'Subestação Amparo - ' + t('translations.header.portfolio.amparo'),
    },
    {
      img: ThePlace,
      description: 'The Place - ' + t('translations.header.portfolio.place'),
    },
    {
      img: UpacMoradia,
      description:
        'Moradia Calheta - ' + t('translations.header.portfolio.moradia'),
    },
    {
      img: Judiciaria,
      description:
        'Judiciária - ' + t('translations.header.portfolio.judicaria'),
    },
    {
      img: Ferragens,
      description:
        'Ferragens Vieira - ' + t('translations.header.portfolio.vieira'),
    },
    {
      img: Lourencinha,
      description:
        'Urb.Laurencinhas - ' + t('translations.header.portfolio.laurencinhas'),
    },
    {
      img: AvacAltice,
      description: 'Avac - Altice',
    },
  ];

  const changeViewportSize = useCallback(() => {
    if (window.innerWidth < GALLERY_MOBILE_WINDOW_WIDTH && !isMobile)
      setIsMobile(true);
    if (window.innerWidth >= GALLERY_MOBILE_WINDOW_WIDTH && isMobile)
      setIsMobile(false);
  }, [isMobile]);

  useEffect(() => {
    window.addEventListener('resize', changeViewportSize);

    return () => {
      window.removeEventListener('resize', changeViewportSize);
    };
  }, [changeViewportSize]);

  if (isMobile) return <MobileGallery items={galleryItems} />;

  return (
    <StyledGalleryGrid>
      {galleryItems.map(({ description, img }) => (
        <GalleryItemWork
          key={description}
          description={description}
          img={img}
        />
      ))}
    </StyledGalleryGrid>
  );
};

export default Gallery;
