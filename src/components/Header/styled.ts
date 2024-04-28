import { NavLink } from "react-router-dom";
import styled from "styled-components";

type StyledHeaderNavigationProps = {
    $isOpen: boolean;
}

export const StyledHeaderContainer = styled.header`
    height: 65px;
    display: flex;
    align-items: center;
    background-color: rgba(0, 122, 169, 0.6);
    padding: 0 20px;

    @media screen and (min-width: 768px) {
        height: 80px;
        padding: 0 40px;
    }
`;

export const StyledHeaderLogoContainer = styled.span`
    width: 200px;
`;

export const StyledHeaderLogo = styled.img``;

export const StyledHeaderContent = styled.div`
    display: flex;
    flex: 1;
    justify-content: flex-end;

    @media screen and (min-width: 768px) {
        order: 2;
        flex: unset;
    }
`;

export const StyledHeaderNavigationButton = styled.button`
    @media screen and (min-width: 768px) {
        display: none;
    }
`;

export const StyledHeaderNavigation = styled.nav<StyledHeaderNavigationProps>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    z-index: 10;
    transform: translateX(${({$isOpen}) => $isOpen ? '0' : '100%'});
    transition: transform 0.5s linear;

    @media screen and (min-width: 768px) {
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

    @media screen and (min-width: 768px) {
        display: none;
    }
`;

export const StyledHeaderNavigationCloseButton = styled.button``;

export const StyledHeaderNavigationItem = styled.li``;

export const StyledHeaderNavigationList = styled.ul`
    display: flex;
    flex-direction: column;
    margin-top: 64px;

    @media screen and (min-width: 768px) {
        flex-direction: row;
        margin-top: 0;
        width: 100%;
        justify-content: flex-end;

        & ${StyledHeaderNavigationItem}:not(:last-child) {
            margin-right: 40px;
        }
    }
`;


export const StyledHeaderNavigationLink = styled(NavLink)`
    text-align: center;
    width: 100%;
    display: block;
    padding: 10px 0;
    font-size: 18px;
    font-weight: bold;
    color: ${({theme}) => theme.palette.thunder};

    &:hover {
        background: #cbcbcb;
    }
`;

export const StyledLanguageDropdownContainer = styled.div`
    position: relative;
    margin-right: 20px;
    z-index: 10;

    @media screen and (min-width: 768px) {
        margin-right: 0;
        margin-left: 40px;
    }
`;

export const StyledLanguageDropdownValue = styled.div`
    cursor: pointer;
    font-size: 16px;
    display: flex;
    align-items: center;
`;

export const StyledLanguageDropdownList = styled.div`
    position: absolute;
    top: 100%;
    right: 0;
    background: #fff;
    border-radius: 4px;
    margin-top: 5px;
    padding: 5px 0;
`;

export const StyledLanguageDropdownOption = styled.div`
    padding: 5px 20px;
    cursor: pointer;
`;

export const StyledLanguageDropdownArrow = styled.span`
    margin-left: 5px;
`;