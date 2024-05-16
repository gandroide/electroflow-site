import styled from "styled-components";
import { StyledQuaternaryTitle, StyledSection } from "../../styles";

export const StyledContactUsSection = styled(StyledSection)`
    min-height: unset;
`; 

export const StyledContactUsOverlay = styled.div<{$background: string}>`
    background: ${({$background}) => `url(${$background}) no-repeat`};
    background-size: cover;
    background-position: right;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 70%;
    z-index: 0;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: linear-gradient(0deg, rgba(9,9,121,0.4318102240896359) 35%, rgba(0,212,255,0) 100%);
        z-index: -1
    }
`;

export const StyledContactUsContainer = styled.div`
    z-index: 1;
    width: 100%;
    align-items: center;
    display: flex;
    flex-direction: column;
`;

export const StyledContactUsContent = styled.div`
    z-index: 1;
    width: 100%;
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-top: 80px;
    max-width: 1100px;

    @media screen and (min-width: 768px) {
        flex-direction: row;
        align-items: unset;
    }
`;

export const StyledFormContainer = styled.div`
    background-color: #fff;
    width: 100%;
    padding: 20px;
    border: 1px solid ${({theme}) => theme.palette.thunder};
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;

    & ${StyledQuaternaryTitle} {
        margin-bottom: 24px;
    }

    @media screen and (min-width: 768px) {
        border-top-right-radius: unset;
        border-bottom-left-radius: 4px;
        width: 65%;
    }

    @media screen and (min-width: 1200px) {
        padding: 40px;
    }
`;

export const StyledTertiaryTitleContainer = styled.div`
    width: 100%;
    max-width: 500px;
`;

export const StyledContactUsInformationContainer = styled.div`
    background-color: ${({theme}) => theme.palette.thunder};
    width: 100%;
    padding: 20px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    z-index: 1;
    
    & * {
        color: #fff;
    }

    @media screen and (min-width: 768px) {
        border-bottom-left-radius: unset;
        border-top-right-radius: 4px;
        width: 35%;
    }

    @media screen and (min-width: 1200px) {
        padding: 40px;
    }
`;

export const StyledContactUsInformationContent = styled.div`
    display: flex;
    align-items: center;

    &:first-of-type {
        margin-top: 24px;
    }

    &:not(:last-child) {
        margin-bottom: 16px;
    }

    @media screen and (min-width: 768px) {
        flex-direction: column;
        align-items: flex-start;

        &:not(:last-child) {
            margin-bottom: 24px;
        }
    }
`;

export const StyledContactUsInformationIcon = styled.span`
    display: flex;
    margin-right: 8px;

    @media screen and (min-width: 768px) {
        margin-bottom: 8px;
        margin-right: 0;

        & svg {
            width: 28px;
            width: 28px;
        }
    }
`;

export const StyledContactUsInformationValue = styled.p`
    font-size: 14px;

    @media screen and (min-width: 768px) {
        font-size: 16px;
    }
`