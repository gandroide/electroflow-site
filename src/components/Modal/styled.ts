import styled from "styled-components";

export const StyledModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;

export const StyledModalBackdrop = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
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
`;

export const StyledModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const StyledModalTitle = styled.h3`
    margin-right: 100px;
    white-space: nowrap;
`;

export const StyledModalContent = styled.div``;