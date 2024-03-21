import styled from "styled-components";
import { GridItemProps, GridProps } from "../../interfaces";

type StyledGridItemProps = {
    $columns: GridItemProps['columns'];
}

type StyledGridProps = {
    $gap?: GridProps['gap'];
}

export const StyledGrid = styled.div<StyledGridProps>`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: ${({$gap}) => `${$gap}px` ?? '50px'};
`;

export const StyledGridItem = styled.div<StyledGridItemProps>`
    grid-column: ${({$columns}) => `span ${$columns?.xs ?? 12}`};

    @media screen and (min-width: 576px) {
        grid-column: ${({$columns}) => `span ${
            $columns?.sm ?? $columns?.xs ?? 12
        }`};
    }

    @media screen and (min-width: 768px) {
        grid-column: ${({$columns}) => `span ${
            $columns?.md ?? $columns?.sm ?? $columns?.xs ?? 12
        }`};
    }

    @media screen and (min-width: 992px) {
        grid-column: ${({$columns}) => `span ${
            $columns?.lg ?? $columns?.md ?? $columns?.sm ?? $columns?.xs ?? 12
        }`};
    }

    @media screen and (min-width: 1200px) {
        grid-column: ${({$columns}) => `span ${
            $columns?.xl ?? $columns?.lg ?? $columns?.md ?? $columns?.sm ?? $columns?.xs ?? 12
        }`};
    }

    @media screen and (min-width: 1400px) {
        grid-column: ${({$columns}) => `span ${
            $columns?.xxl ?? $columns?.xl ?? $columns?.lg ?? $columns?.md ?? $columns?.sm ?? $columns?.xs ?? 12
        }`};
    }
`;
