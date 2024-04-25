import react from 'react';

import { Grid, GridItem } from '../../components/Grid'; 

import { StyledMissonSection, StyledMissonContainer, StyledMissonText, StyledMissonSeparator } from "./styled";
import { StyledSecondaryTitle, StyledSecondaryTitleEmphasis } from '../../styles';

const Misson = () => {
    return (
        <StyledMissonSection>
            <Grid>
                <GridItem columns={{ lg: 5 }}>
                    <StyledMissonContainer>
                        <StyledSecondaryTitle>
                            A nossa <StyledSecondaryTitleEmphasis>missão</StyledSecondaryTitleEmphasis>
                        </StyledSecondaryTitle>
                        <StyledMissonText>
                            A Electroflow tem como principal missão satisfazer as necessidades
                            dos seus clientes, desenvolvendo e implementando soluções de
                            engenharia integradas, com recurso a tecnologias eficientes e
                            sustentáveis.
                        </StyledMissonText>
                    </StyledMissonContainer>
                </GridItem>
                <GridItem columns={{ lg: 2 }}>
                    <StyledMissonSeparator />
                </GridItem>
                <GridItem columns={{ lg: 5 }}>
                    <StyledMissonContainer>
                        <StyledSecondaryTitle>A nossa <StyledSecondaryTitleEmphasis>visão</StyledSecondaryTitleEmphasis></StyledSecondaryTitle>
                        <StyledMissonText>
                            Pretendemos destacar-nos como referência em oferta integrada de
                            projeto, instalação e manutenção das áreas de negócio em que estamos
                            envolvidos, com especial enfoque no mercado regional.
                        </StyledMissonText>
                    </StyledMissonContainer>
                </GridItem>
            </Grid>
        </StyledMissonSection>
    )
}

export default Misson;