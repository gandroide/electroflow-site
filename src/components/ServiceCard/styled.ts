import styled from "styled-components";

export const StyledServiceItem = styled.div`
    box-shadow: 0 0 10px -2px #1F3541;
    padding: 32px;
    background: #fff;
    border-radius: 4px;
    overflow: hidden;
    opacity: 0;

    &:not(:last-child) {
        margin-bottom: 20px;
    }

    @media screen and (min-width: 768px) {
        display: flex;
    }

    @media screen and (min-width: 992px) {
        padding: 0;
    }

    &.service-card-enter:nth-child(odd) {
        opacity: 0;
        transform: translateX(-50px);
    }

    &.service-card-enter-active:nth-child(odd) {
        opacity: 1;
        transform: translateX(0);
        transition: transform 500ms, opacity 500ms;
    }

    &.service-card-enter-done:nth-child(odd) {
        transform: translateX(0);
        opacity: 1;
    }

    &.service-card-enter:nth-child(even) {
        opacity: 0;
        transform: translateX(50px);
    }

    &.service-card-enter-active:nth-child(even) {
        opacity: 1;
        transform: translateX(0);
        transition: transform 500ms, opacity 500ms;
    }

    &.service-card-enter-done:nth-child(even) {
        transform: translateX(0);
        opacity: 1;
    }
`;

export const StyledServiceImgContainer = styled.div`
    min-width: 250px;
    max-width: 250px;
    height: 250px;
    border-radius: 50%;
    border: 4px solid ${({theme}) => theme.palette.boston};
    background: ${({theme}) => theme.palette.boston};
    margin: 0 auto 32px;
    overflow: hidden;

    @media screen and (min-width: 768px) {
        margin: 0 32px 0 0;
    }

    @media screen and (min-width: 992px) {
        height: unset;
        max-width: unset;
        border-radius: 0;
        margin: 0;
        min-width: unset;
        flex: 2;
        border: none;
    }

    @media screen and (min-width: 992px) {
        height: unset;
        max-width: unset;
        border-radius: 0;
        margin: 0;
        min-width: unset;
        flex: 2;
        border: none;
    }

    @media screen and (min-width: 1800px) {
        height: unset;
        max-width: unset;
        border-radius: 0;
        margin: 0;
        min-width: unset;
        flex: 3;
        border: none;
    }
`;

export const StyledServiceImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const StyledServiceContent = styled.div`
    @media screen and (min-width: 768px) {
        display: flex;
        justify-content: center;
        flex-direction: column;
        flex: 1;
    }

    @media screen and (min-width: 992px) {
        padding: 48px;
        flex: 3;
    }

    @media screen and (min-width: 1800px) {
        padding: 48px;
        flex: 4;
    }
`;

export const StyledServiceTitle = styled.h3`
    text-align: center;
    font-size: 24px;
    margin-bottom: 24px;

    @media screen and (min-width: 768px) {
        margin-bottom: 48px;
    }
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