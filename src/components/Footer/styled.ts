import styled from 'styled-components';

export const StyledFooterContent = styled.p`
  display: flex;
  justify-content: center;
  text-align: center;
`;

export const StyledLinkButton = styled.button`
  cursor: pointer;
  text-decoration: underline;
`;

export const StyledFooterRights = styled.span`
  display: inline-block;
  margin-right: 5px;
`;

export const StyledFooter = styled.footer`
  padding: 15px;
  background-color: #f5f5f5;
  border-top: 2px solid ${({theme}) => theme.palette.thunder};
`;
