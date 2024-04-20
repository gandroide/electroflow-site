import react from 'react';
import { StyledMissonSection, StyledMissonContainer } from "./styled";
import { StyledSecondaryTitle, StyledSecondaryTitleEmphasis } from '../../styles';

const Misson = () => {
    return (
        <StyledMissonSection>
            <StyledMissonContainer>
                <StyledSecondaryTitle>
                    A nossa <StyledSecondaryTitleEmphasis>missão</StyledSecondaryTitleEmphasis>
                </StyledSecondaryTitle>
                <p>
                    A Electroflow tem como principal missão satisfazer as necessidades
                    dos seus clientes, desenvolvendo e implementando soluções de
                    engenharia integradas, com recurso a tecnologias eficientes e
                    sustentáveis.
                </p>
            </StyledMissonContainer>

            <StyledMissonContainer>
                <StyledSecondaryTitle>A nossa <StyledSecondaryTitleEmphasis>visão</StyledSecondaryTitleEmphasis></StyledSecondaryTitle>
                <p>
                    Pretendemos destacar-nos como referência em oferta integrada de
                    projeto, instalação e manutenção das áreas de negócio em que estamos
                    envolvidos, com especial enfoque no mercado regional.
                </p>
            </StyledMissonContainer>
        </StyledMissonSection>
    )
}

export default Misson;