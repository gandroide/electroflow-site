import styled from 'styled-components';

export const StyledForm = styled.form``;

export const StyledFormButtosContainer = styled.div`
    display: flex;
    margin-top: 48px;
    justify-content: flex-end;
    width: 100%;
`;

export const StyledFormButton = styled.button`
    color: #fff;
    padding: 8px 48px;
    border-radius: 4px;
    background: ${({theme}) => theme.palette.boston};
`;