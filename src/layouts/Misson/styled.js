import styled from 'styled-components';
import { StyledSection } from '../../styles'

export const StyledMissonSection = styled(StyledSection)`
    min-height: unset;
`;

export const StyledMissonContainer = styled.div`
    &:not(:last-child) {
        margin-bottom: 100px;
    }
`