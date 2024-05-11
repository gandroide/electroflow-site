import styled from "styled-components";

export const StyledModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

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
    position: fixed;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.8);
    z-index: -1;
    top: 0;
    left: 0;
`;

export const StyledModalContainer = styled.div`
    background: #fff;
    padding: 20px;
    max-height: 100%;
    overflow: auto;
    border-radius: 4px;
`;

export const StyledModalHeader = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const StyledModalCloseButton = styled.button`
    border: none;
    background: none;

    & svg {
        height: 32px;
        width: 32px;
        fill: ${({theme}) => theme.palette.thunder};
    }
`;

export const StyledModalContent = styled.div``;