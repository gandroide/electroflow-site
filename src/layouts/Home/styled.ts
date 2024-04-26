import styled from "styled-components";
import { StyledPrimaryTitle, StyledSection } from "../../styles";

export const StyledHomeSection = styled(StyledSection)`
    /* position: relative; */
    height: calc(100vh - 65px);
    min-height: unset;
    width: 100%;
    background-color: #e2e2e2;

    display: flex;
    flex-direction: row;
    /* flex-wrap: nowrap; */
    padding: 0;

    & .swiper {
        height: 100%;
        width: 100%;

        & img {
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
    }

    @media screen and (min-width: 768px) {
        height: calc(100vh - 80px);
    }
`;

export const StyledHomeContentText = styled.p`
    font-size: 20px;
    color: ${({theme}) => theme.palette.thunder};

    &:not(:last-of-type) {
        margin-bottom: 40px;
    }
`;

export const StyledHomeContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40%;
    padding: 64px;

    & ${StyledPrimaryTitle},
    & ${StyledHomeContentText} {
        opacity: 0;
        transform: translateY(50px);
    }

    &.animated-home-enter ${StyledPrimaryTitle} {
        opacity: 0;
        transform: translateY(50px);
    }

    &.animated-home-enter-active ${StyledPrimaryTitle} {
        opacity: 1;
        transform: translateY(0);
        transition: transform 500ms, opacity 500ms;
    }

    &.animated-home-enter-done ${StyledPrimaryTitle} {
        transform: translateY(0);
        opacity: 1;
    }

    &.animated-home-enter ${StyledHomeContentText} {
        opacity: 0;
        transform: translateY(50px);
    }

    &.animated-home-enter-active ${StyledHomeContentText} {
        opacity: 1;
        transform: translateY(0);
        transition: transform 500ms, opacity 500ms;
        transition-delay: 500ms;
    }

    &.animated-home-enter-done ${StyledHomeContentText} {
        transform: translateY(0);
        opacity: 1;
    }
`;

export const StyledHomeSlider = styled.div`
    height: 100%;
    width: 60%;
`;

export const StyledAnimatedTextContainer = styled.span`
    display: block;
    position: relative;
    margin-top: 20px;
    margin-bottom: 40px;
`;

export const StyledHomeContentAnimated = styled.span<{ $first: boolean }>`
    font-size: 24px;
    font-weight: bold;
    color: ${({theme}) => theme.palette.boston};
    display: block;
    opacity: ${({$first}) => $first ? 1 : 0};

    position: absolute;
    top: 0;
    left: 0;

    &.teste-enter {
        opacity: 0;
        top: 20px;
    }

    &.teste-enter-active {
        opacity: 1;
        top: 0;
        transition: top 500ms, opacity 500ms;
    }

    &.teste-enter-done {
        opacity: 1;
        top: 0;
    }

    &.teste-exit {
        opacity: 1;
        top: 0;
    }

    &.teste-exit-active {
        opacity: 0;
        top: -20px;
        transition: top 500ms, opacity 500ms;
    }

    &.teste-exit-done {
        opacity: 0;
        top: -20px;
    }
`;