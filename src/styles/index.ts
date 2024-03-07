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
    background: #f5f5f5;
    padding: 50px 100px;
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
    margin-bottom: 64px;
`;

export const StyledContactCardImgContainer = styled.div`
    height: 100px;
    width: 110px;
    position: absolute;
    bottom: 30px;
    right: 30px;
    background: #fff;
    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
`;

export const StyledContactCardImg = styled.div`
    height: calc(100% - 6px);
    width: calc(100% - 6px);
    background: black;
    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
`;

export const StyledContactCardRightTrapezoidSmall = styled.div`
    height: 80px;
    width: 150px;
    clip-path: polygon(50% 0, 100% 0, 100% 100%, 0% 100%);
    background: #000;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: 1;
`

export const StyledContactCardRightTrapezoidBig = styled.div`
    height: 100px;
    width: 175px;
    clip-path: polygon(50% 0, 100% 0, 100% 100%, 0% 100%);
    background: orange;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: 0;
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

export const StyledText = styled.p`
    font-size: 24px;
    width: 100%;
    max-width: 1000px;
    text-align: center;
`;