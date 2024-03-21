import styled from "styled-components";

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

export const StyledFormContainer = styled.div`
    background-color: #fff;
    width: 100%;
    padding: 20px;
    margin-top: 50px;
    box-shadow: 0 0 10px #cbcbcb;
    border-radius: 4px;
`;