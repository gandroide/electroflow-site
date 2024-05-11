import styled from 'styled-components';

export const StyledFooterContent = styled.p`
  text-align: center;
  
  & * {
    color: #fff;
  }
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
  background-color: ${({theme}) => theme.palette.thunder};
`;
