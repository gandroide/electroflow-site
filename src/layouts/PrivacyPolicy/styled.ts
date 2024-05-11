import styled from "styled-components";

export const StyledPrivacyPolicyContainer = styled.div`
    color: ${({theme}) => theme.palette.thunder};
    max-width: 700px;
    width: 100%;
`;

export const StyledPrivacyPolicyDateText = styled.p`
    font-size: 14px;
    font-weight: bold;
    margin-top: 16px;
`;

export const StyledPrivacyPolicyText = styled.p`
    &:not(:last-of-type) {
        margin-bottom: 16px;
    }

    @media screen and (min-width: 992px) {
        font-size: ${({theme}) => theme.fonts.text.medium};

        & strong {
            font-size: ${({theme}) => theme.fonts.text.medium};
        }
    }
`;

export const StyledPrivacyPolicyContent = styled.div`
    &:first-of-type {
        margin-top: 32px;
    }

    &:not(:last-of-type) {
        margin-bottom: 24px;
    }
`;

export const StyledPrivacyPolicyMainTitle = styled.h3`
    font-size: ${({theme}) => theme.fonts.h3};
    color: ${({theme}) => theme.palette.boston};
    font-weight: bold;
`;

export const StyledPrivacyPolicyTitle = styled.h4`
    font-size: ${({theme}) => theme.fonts.h4};;
    font-weight: bold;
    margin-bottom: 8px;
`;

export const StyledPrivacyPolicyList = styled.ul`
    margin-top: 10px;
`;

export const StyledPrivacyPolicyListItem = styled.li`
    display: flex;

    &:not(:last-of-type) {
        margin-bottom: 8px;
    }
`;

export const StyledPrivacyPolicyListItemIdentifier = styled.span`
    font-size: 14px;

    @media screen and (min-width: 992px) {
        font-size: ${({theme}) => theme.fonts.text.small};
    }
`;

export const StyledPrivacyPolicyListItemText = styled.p`
    margin-left: 4px;
    font-size: 14px;

    & em {
        font-size: 14px;
    }

    @media screen and (min-width: 992px) {
        font-size: ${({theme}) => theme.fonts.text.small};

        & em {
            font-size: ${({theme}) => theme.fonts.text.small};
        }
    }
`;