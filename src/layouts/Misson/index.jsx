import react from 'react';

import { Grid, GridItem } from '../../components/Grid'; 
import { GiProgression } from "react-icons/gi";
import { VscWorkspaceTrusted } from "react-icons/vsc";

import { StyledMissonSection, StyledMissonContainer, StyledMissonText, StyledMissonSeparator, StyledMissonIcon } from "./styled";
import { StyledSecondaryTitle } from '../../styles';

const Misson = () => {
    return (
        <StyledMissonSection>
            <Grid>
                <GridItem columns={{ lg: 5 }}>
                    <StyledMissonContainer>
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
                </GridItem>
                <GridItem columns={{ lg: 2 }}>
                    <StyledMissonSeparator />
                </GridItem>
                <GridItem columns={{ lg: 5 }}>
                    <StyledMissonContainer>
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
                </GridItem>
            </Grid>
        </StyledMissonSection>
    )
}

export default Misson;