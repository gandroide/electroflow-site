import styled from 'styled-components';
import { StyledSection } from '../../styles';

export const StyledMissonContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    opacity: 0;
    transform: translateY(100px);
`;

export const StyledMissonSection = styled(StyledSection)`
    min-height: unset;
    overflow: hidden;
`;

export const StyledMissonText = styled.p`
    text-align: center;
    color: ${({theme}) => theme.palette.thunder};

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
    background-color: ${({theme}) => theme.palette.boston};
    margin: 75px auto;

    @media screen and (min-width: 992px) {
        width: 3px;
        height: 100%;
        margin: 0 auto;
    }
`;

export const StyledMissonIcon = styled.span`
    margin-bottom: 64px;

    & svg {
        font-size: 128px;
        fill: ${({theme}) => theme.palette.boston};
    }
`;