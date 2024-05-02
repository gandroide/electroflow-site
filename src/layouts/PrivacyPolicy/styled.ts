import styled from "styled-components";

export const StyledPrivacyPolicyContainer = styled.div`
    color: ${({theme}) => theme.palette.thunder};
`;

export const StyledPrivacyPolicyDateText = styled.p`
    font-size: 14px;
    font-weight: bold;
    margin-top: 16px;
`;

export const StyledPrivacyPolicyText = styled.p`
    font-size: 14px;

    &:not(:last-of-type) {
        margin-bottom: 16px;
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

export const StyledPrivacyPolicyTitle = styled.h4`
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 8px;
`;

export const StyledPrivacyPolicyList = styled.ul`
    margin-top: 10px;
`;

export const StyledPrivacyPolicyListItem = styled.li`
    display: flex;
    font-size: 14px;

    &:not(:last-of-type) {
        margin-bottom: 8px;
    }
`;

export const StyledPrivacyPolicyListItemIdentifier = styled.span``;

export const StyledPrivacyPolicyListItemText = styled.p`
    margin-left: 4px;
`;