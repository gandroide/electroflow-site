import react, { useEffect, useRef, useState } from 'react';

import { Grid, GridItem } from '../../components/Grid'; 
import { GiProgression } from "react-icons/gi";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { CSSTransition } from 'react-transition-group';

import { StyledMissonSection, StyledMissonContainer, StyledMissonText, StyledMissonSeparator, StyledMissonIcon } from "./styled";
import { StyledSecondaryTitle } from '../../styles';

const Misson = () => {
    const missonRef = useRef();
    const visionRef = useRef();

    const isMissonVisible = useIntersectionObserver({ ref: missonRef });
    const isVisionVisible = useIntersectionObserver({ ref: visionRef });

    return (
        <StyledMissonSection id="mission">
            <Grid>
                <GridItem columns={{ lg: 5 }}>
                    <CSSTransition in={isMissonVisible} timeout={750} classNames="animated">
                        <StyledMissonContainer ref={missonRef} className="teste">
                            <StyledMissonIcon>
                                <VscWorkspaceTrusted />
                            </StyledMissonIcon>
                            <StyledSecondaryTitle>
                                Missão
                            </StyledSecondaryTitle>
                            <StyledMissonText>
                                A Electroflow tem como principal missão satisfazer as necessidades
                                dos seus clientes, desenvolvendo e implementando soluções de
                                engenharia integradas, com recurso a tecnologias eficientes e
                                sustentáveis.
                            </StyledMissonText>
                        </StyledMissonContainer>
                    </CSSTransition>
                </GridItem>
                <GridItem columns={{ lg: 2 }}>
                    <StyledMissonSeparator />
                </GridItem>
                <GridItem columns={{ lg: 5 }}>
                    <CSSTransition in={isVisionVisible} timeout={750} classNames="animated">
                        <StyledMissonContainer ref={visionRef}>
                            <StyledMissonIcon>
                                <GiProgression />
                            </StyledMissonIcon>
                            <StyledSecondaryTitle>Visão</StyledSecondaryTitle>
                            <StyledMissonText>
                                Pretendemos destacar-nos como referência em oferta integrada de
                                projeto, instalação e manutenção das áreas de negócio em que estamos
                                envolvidos, com especial enfoque no mercado regional.
                            </StyledMissonText>
                        </StyledMissonContainer>
                    </CSSTransition>
                </GridItem>
            </Grid>
        </StyledMissonSection>
    )
}

export default Misson;