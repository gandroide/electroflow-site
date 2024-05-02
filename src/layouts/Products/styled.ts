import styled from 'styled-components';
import { StyledSection } from '../../styles';
import { Link } from 'react-router-dom';

export const StyledProductsSection = styled(StyledSection)`
    background: rgba(158, 195, 224, 0.1);
    padding: 50px 5px;
    min-height: unset;

    @media screen and (min-width: 992px) {
        padding: 50px 25px;
    }

    @media screen and (min-width: 1200px) {
        padding: 75px 25px;
    }

    @media screen and (min-width: 1600px) {
        padding: 75px 50px;
    }
`;

export const StyledProductsSwiperContainer = styled.div`
    width: 100%;

    & .swiper-slide {
        padding: 15px;
    }

    & .swiper-pagination {
        display: flex;
        justify-content: center;
        margin-top: 16px;
    }

    & .swiper-pagination-bullet {
        height: 20px;
        width: 20px;
        display: inline-block;
        border-radius: 50%;
        border: 1px solid ${({theme}) => theme.palette.boston};
        background-color: #fff;

        &:not(:last-of-type) {
            margin-right: 8px;
        }

        &.swiper-pagination-bullet-active {
            background-color: ${({theme}) => theme.palette.boston};
        }
    }

    @media screen and (min-width: 992px) {
        & .swiper-pagination {
            margin-top: 32px;
        }
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
    border-bottom: 2px solid ${({theme}) => theme.palette.thunder};
`;

export const StyledProductImage = styled.img`
    height: 350px;
    width: 100%;
    object-fit: cover;
`;

export const StyledProductContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 32px 16px;
    overflow: auto;
    align-items: flex-start;
`;

export const StyledProductName = styled.p`
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 10px;
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`;

export const StyledProductDescriptionContainer = styled.div``;

export const StyledProductDescription = styled.p`
    font-size: 14px;
    width:100%;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    background:#fff;

    &:not(:last-child) {
        margin-bottom: 10px;
    }

    @media screen and (min-width: 1350px) {
        -webkit-line-clamp: 5;
    }
`;

export const StyledProductLink = styled(Link)`
    font-weight: bold;
    margin-top: 24px;
    color: ${({theme}) => theme.palette.boston};
    cursor: pointer;
    position: relative;
    display: inline-block;

    &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -1px;
        width: 100%;
        height: 2px;
        background-color: ${({theme}) => theme.palette.boston};
    }
`