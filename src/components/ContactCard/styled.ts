import styled from "styled-components";

export const StyledContactCardContainer = styled.div`
    box-shadow: 0 0 10px #cbcbcb;
    padding: 30px 0 30px 60px;
    position: relative;
`;

export const StyledContactCardContent = styled.div``;

export const StyledContactCardLeftBorder = styled.div`
    background: #000;
    clip-path: polygon(50% 0, 50% 30%, 100% 50%, 100% 100%, 0 100%, 0% 60%, 0 0);
    position: absolute;
    top: 0;
    left: 0;
    width: 40px;
    height: 100%;
`;

export const StyledContactCardHeader = styled.div`
    position: relative;
`;

export const StyledContactCardName = styled.p`
    font-size: 16px;
    font-weight: bold;
`;

export const StyledContactCardPosition = styled.p`
    font-size: 14px;
`;

export const StyledContactCardHeaderSeparator = styled.div`
    background: orange;
    height: 2px;
    width: 60%;
    margin: 5px 0;
`;

export const StyledContactCardInfoContainer = styled.div`
    margin-top: 40px;
`;

export const StyledContactCardInfoContent = styled.div`
    &:not(:last-child) {
        margin-bottom: 10px;
    }
`;

export const StyledContactCardInfoLabel = styled.p`
    color: orange;
    font-weight: bold;
    font-size: 14px;
`;

export const StyledContactCardInfoValue = styled.p`
    font-size: 14px;
`;

export const StyledContactCardTopTrapezoid = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    height: 30px;
    background: orange;
    width: 30%;
    clip-path: polygon(10% 0, 100% 0, 100% 100%, 0% 100%);
`;