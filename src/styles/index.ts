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
`