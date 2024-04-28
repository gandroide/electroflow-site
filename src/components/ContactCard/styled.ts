import styled from "styled-components";

export const StyledContactCardContainer = styled.div`
    box-shadow: 0 0 10px #cbcbcb;
    /* padding: 30px 0 30px 60px; */
    position: relative;
    padding: 20px 60px;
    color: ${({theme}) => theme.palette.thunder};

    @media screen and (min-width: 650px) {
        padding: 20px 60px;
    }
`;

export const StyledContactCardContent = styled.div``;

export const StyledContactCardLeftBorder = styled.div`
    background: ${({theme}) => theme.palette.boston};
    clip-path: polygon(50% 0, 50% 30%, 100% 50%, 100% 100%, 0 100%, 0% 60%, 0 0);
    position: absolute;
    top: 0;
    left: 0;
    width: 40px;
    height: 100%;
`;

export const StyledContactCardHeader = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 40px;

    @media screen and (min-width: 600px) {
        width: unset;
        flex: 1;
        margin-top: -4px;
        margin-left: 20px;
    }

    @media screen and (min-width: 768px) {
        width: 100%;
        margin-top: 40px;
    }
`;

export const StyledContactCardName = styled.p`
    font-size: 16px;
    font-weight: bold;

    @media screen and (min-width: 992px) {
        font-size: 18px;
    }
`;

export const StyledContactCardPosition = styled.p`
    font-size: 14px;
    text-align: center;
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;

    @media screen and (min-width: 992px) {
        font-size: 16px;
    }
`;

export const StyledContactCardHeaderSeparator = styled.div`
    background: ${({theme}) => theme.palette.boston};
    height: 2px;
    margin: 5px 0;
    width: 100%;
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
    color: ${({theme}) => theme.palette.boston};;
    font-weight: bold;
    font-size: 14px;

    @media screen and (min-width: 992px) {
        font-size: 16px;
    }
`;

export const StyledContactCardInfoValue = styled.p`
    font-size: 16px;

    @media screen and (min-width: 992px) {
        font-size: 18px;
    }
`;

export const StyledContactCardTopTrapezoid = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    height: 30px;
    background: ${({theme}) => theme.palette.boston};
    width: 30%;
    clip-path: polygon(10% 0, 100% 0, 100% 100%, 0% 100%);
    display: none;
`;

export const StyledContactCardImgContainer = styled.div`
    height: 150px;
    width: 170px;
    bottom: 30px;
    right: 30px;
    background: ${({theme}) => theme.palette.boston};
    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
`;

export const StyledContactCardImg = styled.div`
    height: calc(100% - 6px);
    width: calc(100% - 6px);
    background: #fff;
    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
    display: flex;
    align-items: center;
    justify-content: center;

    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const StyledContactCardRightTrapezoidSmall = styled.div`
    height: 80px;
    width: 150px;
    clip-path: polygon(50% 0, 100% 0, 100% 100%, 0% 100%);
    background: ${({theme}) => theme.palette.thunder};
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: 1;
    display: none;

    @media screen and (min-width: 600px) {
        display: unset;
    }

    @media screen and (min-width: 650px) {
        width: 200px;
    }

    @media screen and (min-width: 768px) {
        display: none;
    }
`

export const StyledContactCardRightTrapezoidBig = styled.div`
    height: 100px;
    width: 175px;
    clip-path: polygon(50% 0, 100% 0, 100% 100%, 0% 100%);
    background: ${({theme}) => theme.palette.boston};;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: 0;
    display: none;

    @media screen and (min-width: 600px) {
        display: unset;
    }

    @media screen and (min-width: 650px) {
        width: 250px;
    }

    @media screen and (min-width: 768px) {
        display: none;
    }
`;

export const StyledContactCardHeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: 600px) {
        flex-direction: row;
    }

    @media screen and (min-width: 768px) {
        flex-direction: column;
    }
`