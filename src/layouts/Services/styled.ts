import styled from "styled-components";
import { StyledSection } from "../../styles";

export const StyledServicesSection = styled(StyledSection)`
    background: rgba(158, 195, 224, 0.1);
`;

export const StyledServicesContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const StyledServiceItem = styled.div`
    box-shadow: 0 0 10px -2px #1F3541;
    padding: 32px;
    background: #fff;
    border-radius: 4px;
    overflow: hidden;

    &:not(:last-child) {
        margin-bottom: 20px;
    }
`;

export const StyledServiceImgContainer = styled.div`
    width: 250px;
    height: 250px;
    border-radius: 50%;
    border: 1px solid ${({theme}) => theme.palette.boston};
    margin: 0 auto 32px;
`;

export const StyledServiceImg = styled.div``;

export const StyledServiceTitle = styled.h3`
    text-align: center;
    font-size: 24px;
    margin-bottom: 24px;
`;

export const StyledServiceList = styled.ul``;

export const StyledServiceListItem = styled.li`
    display: flex;

    & svg {
        min-width: 24px;
        height: 24px;
    }

    &:not(:last-child) {
        margin-bottom: 8px;
    }
`;

export const StyledServiceListDescription = styled.span`
    margin-left: 8px;
    display: block;
`;