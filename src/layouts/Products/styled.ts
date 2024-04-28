import styled from 'styled-components';
import { StyledSection } from '../../styles';

export const StyledProductsSection = styled(StyledSection)`
    background: rgba(158, 195, 224, 0.1);
    padding: 50px 20px;

    @media screen and (min-width: 992px) {
        padding: 50px 40px;
    }

    @media screen and (min-width: 1200px) {
        padding: 75px 40px;
    }

    @media screen and (min-width: 1600px) {
        padding: 75px 75px;
    }
`;

export const StyledProductsSwiperContainer = styled.div`
    width: 100%;

    & .swiper-wrapper {
        height: 800px;
        display: flex;
        align-items: center;
    }

    & .swiper-slide {
        padding: 15px;
    }
`;

export const StyledProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    overflow: hidden;
    height: 100%;
    box-shadow: 0 0 10px -2px ${({theme}) => theme.palette.thunder};
    background: #fff;
`;

export const StyledProductImageContainer = styled.div`
    border-bottom: 3px solid ${({theme}) => theme.palette.boston};
`;

export const StyledProductImage = styled.img`
    height: 350px;
    width: 100%;
    object-fit: cover;
`;

export const StyledProductContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
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