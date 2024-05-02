import styled from "styled-components";

export const StyledModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;

    /* Scroll bar stylings */
    &::-webkit-scrollbar {
        width: 10px;
        height: 10px;
    }

    /* Track */
    &::-webkit-scrollbar-track {
        background: #ccc; 
    }
    
    /* Handle */
    &::-webkit-scrollbar-thumb {
        background: #888; 
        border-radius: 5px;
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
        background: #555; 
    }
`;

export const StyledModalBackdrop = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.8);
    z-index: -1;
`;

export const StyledModalContainer = styled.div`
    background: #fff;
    padding: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-height: calc(100% - 40px);
    overflow: auto;
    width: 100%;
    max-width: 700px;
    border-radius: 4px;
`;

export const StyledModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const StyledModalTitle = styled.h3`
    margin-right: 100px;
    white-space: nowrap;
    color: ${({theme}) => theme.palette.boston};
    font-size: 24px;
    font-weight: bold;
`;

export const StyledModalContent = styled.div``;