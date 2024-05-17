import react, { useRef } from 'react';

import { Grid, GridItem } from '../../components/Grid';
import { GiProgression } from 'react-icons/gi';
import { VscWorkspaceTrusted } from 'react-icons/vsc';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { CSSTransition } from 'react-transition-group';

import {
  StyledMissonSection,
  StyledMissonContainer,
  StyledMissonText,
  StyledMissonSeparator,
  StyledMissonIcon,
} from './styled';
import { StyledSecondaryTitle } from '../../styles';
import { useTranslation } from 'react-i18next';

const Misson = () => {
  const missonRef = useRef();
  const visionRef = useRef();
  const { t } = useTranslation();

  const isMissonVisible = useIntersectionObserver({ ref: missonRef });
  const isVisionVisible = useIntersectionObserver({ ref: visionRef });

  return (
    <StyledMissonSection id="mission">
      <Grid>
        <GridItem columns={{ lg: 5 }}>
          <CSSTransition
            in={isMissonVisible}
            timeout={750}
            classNames="animated"
          >
            <StyledMissonContainer ref={missonRef} className="teste">
              <StyledMissonIcon>
                <VscWorkspaceTrusted />
              </StyledMissonIcon>
              <StyledSecondaryTitle>
                {t('translations.header.mission.title')}
              </StyledSecondaryTitle>
              <StyledMissonText>
                {t('translations.header.mission.mission')}
              </StyledMissonText>
            </StyledMissonContainer>
          </CSSTransition>
        </GridItem>
        <GridItem columns={{ lg: 2 }}>
          <StyledMissonSeparator />
        </GridItem>
        <GridItem columns={{ lg: 5 }}>
          <CSSTransition
            in={isVisionVisible}
            timeout={750}
            classNames="animated"
          >
            <StyledMissonContainer ref={visionRef}>
              <StyledMissonIcon>
                <GiProgression />
              </StyledMissonIcon>
              <StyledSecondaryTitle>
                {t('translations.header.mission.visionTilte')}
              </StyledSecondaryTitle>
              <StyledMissonText>
                {t('translations.header.mission.vision')}
              </StyledMissonText>
            </StyledMissonContainer>
          </CSSTransition>
        </GridItem>
      </Grid>
    </StyledMissonSection>
  );
};

export default Misson;
