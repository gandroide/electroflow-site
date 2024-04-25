import styled from 'styled-components';
import { StyledSection } from '../../styles';

export const StyledMissonContainer = styled.div``;

export const StyledMissonSection = styled(StyledSection)`
    min-height: unset;
`;

export const StyledMissonText = styled.p`
    text-align: center;

    @media screen and (min-width: 992px) {
        font-size: 18px;
    }

    @media screen and (min-width: 1200px) {
        font-size: 20px;
    }
`;

export const StyledMissonSeparator = styled.div`
    width: 50%;
    height: 2px;
    background-color: red;
    margin: 75px auto;

    @media screen and (min-width: 992px) {
        width: 2px;
        height: 100%;
        margin: 0 auto;
    }
`;