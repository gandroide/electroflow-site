import styled from 'styled-components';

export const StyledGalleryGrid = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(6, 150px);
    gap: 10px;

    & div:nth-child(1) {
        grid-column: 1 / span 3;
        grid-row: 1 / span 3;
    }

    & div:nth-child(2) {
        grid-column: 4 / span 1;
        grid-row: 1 / span 4;
    }

    & div:nth-child(3) {
        grid-column: 5 / span 2;
        grid-row: 1 / span 2;
    }

    & div:nth-child(4) {
        grid-column: 5 / span 2;
        grid-row: 3 / span 2;
    }

    & div:nth-child(5) {
        grid-column: 1 / span 1;
        grid-row: 4 / span 3;
    }

    & div:nth-child(6) {
        grid-column: 2 / span 1;
        grid-row: 4 / span 1;
    }

    & div:nth-child(7) {
        grid-column: 3 / span 1;
        grid-row: 4 / span 1;
    }

    & div:nth-child(8) {
        grid-column: 2 / span 2;
        grid-row: 5 / span 2;
    }

    & div:nth-child(9) {
        grid-column: 4 / span 2;
        grid-row: 5 / span 2;
    }

    & div:nth-child(10) {
        grid-column: 6 / span 1;
        grid-row: 5 / span 1;
    }

    & div:nth-child(11) {
        grid-column: 6 / span 1;
        grid-row: 6 / span 1;
    }
`;

export const StyledGalleryItemContainer = styled.div`
    border: 1px solid #cbcbcb;
    position: relative;
`;

export const StyledGalleryItemImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const StyledGalleryItemDescription = styled.p`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 10px;
    background: rgba(31, 53, 65, 0.9);
    color: #fff;
    text-align: center;
`;

export const StyledMobileGallery = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    & ${StyledGalleryItemContainer} {
        margin-bottom: 20px;
    }

    & ${StyledGalleryItemImage} {
        height: 300px;
        width: 100%;
        object-fit: cover;
    }

    @media screen and (min-width: 500px) {
        & ${StyledGalleryItemImage} {
            height: 350px;
        }
    }
`;