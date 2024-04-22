import styled from 'styled-components';

export const StyledProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #cbcbcb;
`;

export const StyledProductImageContainer = styled.div`
    border-bottom: 1px solid #cbcbcb;
`;

export const StyledProductImage = styled.img`
    height: 250px;
    width: 100%;
    object-fit: cover;
`;

export const StyledProductContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    max-height: 200px;
    overflow: auto;
`;

export const StyledProductName = styled.p`
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 10px;
`;

export const StyledProductDescriptionContainer = styled.div``;

export const StyledProductDescription = styled.p`
    display: block;
    font-size: 14px;

    &:not(:last-child) {
        margin-bottom: 10px;
    }
`;