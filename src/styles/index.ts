import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
`;

export const StyledSection = styled.section`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: 1px solid red;
    padding: 50px 20px;
    position: relative;

    @media screen and (min-width: 992px) {
        padding: 50px 40px;
    }

    @media screen and (min-width: 1200px) {
        padding: 75px 100px;
    }

    @media screen and (min-width: 1600px) {
        padding: 75px 200px;
    }
`;

export const StyledHomeSection = styled.section`
    position: relative;
    height: calc(100vh - 65px);

    & .swiper {
        height: 100%;

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

export const StyledSecondaryTitle = styled.h2`
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 50px;
    line-height: 42px;
    text-align: center;

    @media screen and (min-width: 1200px) {
        margin-bottom: 75px;
    }
`;

export const StyledTertiaryTtile = styled.h3`
    font-size: 18px;
    font-weight: bold;
    line-height: 26px;
    text-align: center;
`;

export const StyledHomeContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(255, 255, 255, 0.6);
    z-index: 10;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-bottom: 60px;
    pointer-events: none;
`;

export const StyledPrimaryTitle = styled.h1`
    font-size: 124px;
    margin: 112px 0;
`;

export const StyledQuaternaryTitle = styled.h4`
    font-size: 16px;
    font-weight: bold;
`;

export const StyledText = styled.p`
    font-size: 24px;
    width: 100%;
    max-width: 1000px;
    text-align: center;
`;