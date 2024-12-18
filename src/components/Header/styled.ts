import { NavLink } from "react-router-dom";
import styled from "styled-components";

type StyledHeaderNavigationProps = {
    $isOpen: boolean;
}

export const StyledHeaderContainer = styled.header`
    height: 65px;
    display: flex;
    align-items: center;
    background: linear-gradient(to right, rgba(31, 53, 65, 0.1), rgba(31, 53, 65, 1) 70%);
    padding: 0 20px;

    @media screen and (min-width: 1300px) {
        height: 70px;
        padding: 0 40px;
    }
`;

export const StyledHeaderLogoContainer = styled(NavLink)<StyledHeaderNavigationProps>`
    width: 200px;
    z-index: ${({$isOpen}) => $isOpen ? 100 : 0};
    position: ${({$isOpen}) => $isOpen ? 'fixed' : 'relative'};
`;

export const StyledHeaderLogo = styled.img``;

export const StyledHeaderContent = styled.div`
    display: flex;
    flex: 1;
    justify-content: flex-end;

    @media screen and (min-width: 1300px) {
        order: 2;
        flex: unset;
    }
`;

export const StyledHeaderNavigationButton = styled.button<StyledHeaderNavigationProps>`
    z-index: ${({$isOpen}) => $isOpen ? 100 : 0};

    @media screen and (min-width: 1300px) {
        display: none;
    }
`;

export const StyledHeaderNavigation = styled.nav<StyledHeaderNavigationProps>`
    position: fixed;
    top: 0;
    right: -100%;
    width: 100%;
    height: 100%;
    background: #fff;
    z-index: 10;
    transform: translateX(${({$isOpen}) => $isOpen ? '-100%' : '100%'});
    transition: transform 0.4s linear;

    @media screen and (min-width: 1300px) {
        position: unset;
        top: unset;
        left: unset;
        transform: unset;
        transition: unset;
        width: unset;
        height: unset;
        background: none;
        flex: 1;
    }
`;

export const StyledHeaderNavigationHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;

    @media screen and (min-width: 1300px) {
        display: none;
    }
`;

export const StyledHeaderNavigationCloseButton = styled.button``;

export const StyledHeaderNavigationItem = styled.li``;

export const StyledHeaderNavigationList = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 64px;
    height: calc(100% - 64px);
    border-top: 1px solid ${({theme}) => theme.palette.thunder};

    @media screen and (min-width: 1300px) {
        flex-direction: row;
        padding-top: 0;
        margin-top: 0;
        width: 100%;
        justify-content: flex-end;
        border-top: unset;
        align-items: center;

        & ${StyledHeaderNavigationItem}:not(:last-child) {
            margin-right: 20px;
        }
    }
`;


export const StyledHeaderNavigationLink = styled(NavLink)`
    text-align: center;
    width: 100%;
    display: block;
    padding: 20px 0;
    font-weight: bold;
    color: ${({theme}) => theme.palette.thunder};
    position: relative;
    font-size: 24px;

    @media screen and (min-width: 1300px) {
        color: ${({theme}) => theme.palette.thunder};
        background-color: #fff;
        padding: 5px 20px;
        border-radius: 4px;
        font-size: 18px;
        font-weight: bold;
    }
`;

export const StyledHeaderNavigationAnchor = styled(NavLink)`
    text-align: center;
    width: 100%;
    display: block;
    padding: 20px 0;
    font-weight: bold;
    color: ${({theme}) => theme.palette.thunder};
    position: relative;
    font-size: 24px;

    @media screen and (min-width: 1300px) {
        padding: 0 10px;
        font-size: 18px;
        color: #fff;

        &::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            width: 0;
            transition: width 0.2s linear;
            height: 2px;
            background-color: #fff;
        }

        &:hover {
            &::after {
                width: 100%;
            }
        }
    }
`;

export const StyledLanguageDropdownContainer = styled.div`
    position: relative;
    margin-right: 20px;
    z-index: 10;

    @media screen and (min-width: 1300px) {
        margin-right: 0;
        margin-left: 40px;
    }
`;

export const StyledLanguageDropdownValue = styled.div`
    cursor: pointer;
    font-size: 16px;
    display: flex;
    align-items: center;
    color: #fff;
`;

export const StyledLanguageDropdownList = styled.div`
    position: absolute;
    top: 100%;
    right: 0;
    background: #fff;
    border-radius: 4px;
    margin-top: 15px;
    border: 1px solid ${({theme}) => theme.palette.thunder};
`;

export const StyledLanguageDropdownOption = styled.div`
    padding: 5px 40px;
    cursor: pointer;
    font-size: 16px;
    text-align: center;

    &:not(:last-of-type) {
        border-bottom: 1px solid ${({theme}) => theme.palette.thunder};
    }
`;

export const StyledLanguageDropdownArrow = styled.span`
    margin-left: 5px;
`;